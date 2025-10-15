import { useState, useEffect, useCallback } from "react";

export const COUNTDOWN_DURATION = 15 * 60 * 1000; // 10 minutes in milliseconds
export const REOPEN_DELAY = 5 * 60 * 1000; // wait 5 minutes at full price before reopening offer
export const STORAGE_KEY = "countdown_end_time";
export const REOPEN_AT_KEY = "countdown_reopen_at";

const DEFAULT_STATUS = "safe" as const;

export type CountdownStatus = "safe" | "warm" | "hot" | "critical" | "expired";

const now = () => Date.now();

const ensureEndTime = (): number => {
    if (typeof window === "undefined") {
        return now() + COUNTDOWN_DURATION;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return parseInt(stored, 10);
    }

    const nextEnd = now() + COUNTDOWN_DURATION;
    window.localStorage.setItem(STORAGE_KEY, nextEnd.toString());
    return nextEnd;
};

const readReopenAt = (): number | null => {
    if (typeof window === "undefined") {
        return null;
    }

    const stored = window.localStorage.getItem(REOPEN_AT_KEY);
    return stored ? parseInt(stored, 10) : null;
};

const clearReopen = () => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(REOPEN_AT_KEY);
};

const storeReopenAt = (timestamp: number) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(REOPEN_AT_KEY, timestamp.toString());
};

const calculateStatus = (seconds: number, isExpired: boolean): CountdownStatus => {
    if (isExpired) return "expired";

    // Thresholds scaled proportionally to total duration:
    // warm: <= 2/3 of duration, hot: <= 1/3, critical: <= 1/5
    const durationSeconds = Math.floor(COUNTDOWN_DURATION / 1000);
    const warmThreshold = Math.floor((2 / 3) * durationSeconds);
    const hotThreshold = Math.floor((1 / 3) * durationSeconds);
    const criticalThreshold = Math.floor((1 / 5) * durationSeconds);

    if (seconds <= criticalThreshold) return "critical";
    if (seconds <= hotThreshold) return "hot";
    if (seconds <= warmThreshold) return "warm";
    return DEFAULT_STATUS;
};

export function resetCountdownStorage() {
    if (typeof window === "undefined") return;
    const nextEnd = now() + COUNTDOWN_DURATION;
    window.localStorage.setItem(STORAGE_KEY, nextEnd.toString());
    clearReopen();
}

export function useCountdown() {
    const initialEndTime = ensureEndTime();
    const initialDiff = Math.max(initialEndTime - now(), 0);

    const [timeLeft, setTimeLeft] = useState<number>(initialDiff);
    const [isExpired, setIsExpired] = useState<boolean>(initialDiff <= 0);
    const [reopenAvailableAt, setReopenAvailableAt] = useState<number | null>(readReopenAt);
    const [currentTimestamp, setCurrentTimestamp] = useState<number>(now());

    const syncState = useCallback(() => {
        const current = now();
        const endTime = ensureEndTime();
        let difference = endTime - current;

        if (difference <= 0) {
            difference = 0;
            if (!isExpired) {
                setIsExpired(true);
            }

            const latestReopenAt = readReopenAt();
            if (!latestReopenAt) {
                const reopenAt = current + REOPEN_DELAY;
                storeReopenAt(reopenAt);
                setReopenAvailableAt(reopenAt);
            } else {
                setReopenAvailableAt(latestReopenAt);
            }
        } else {
            if (isExpired) {
                setIsExpired(false);
            }
            if (reopenAvailableAt) {
                clearReopen();
                setReopenAvailableAt(null);
            }
        }

        setTimeLeft(difference);
        setCurrentTimestamp(current);
    }, [isExpired, reopenAvailableAt]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const intervalId = window.setInterval(syncState, 1000);
        syncState();

        return () => window.clearInterval(intervalId);
    }, [syncState]);

    const resetCountdown = useCallback(() => {
        if (typeof window === "undefined") return;

        const newEndTime = now() + COUNTDOWN_DURATION;
        window.localStorage.setItem(STORAGE_KEY, newEndTime.toString());
        clearReopen();
        setReopenAvailableAt(null);
        setIsExpired(false);
        setTimeLeft(Math.max(newEndTime - now(), 0));
        setCurrentTimestamp(now());
    }, []);

    const totalSeconds = Math.floor(timeLeft / 1000);
    const minutes = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, "0");
    const seconds = Math.floor(totalSeconds % 60)
        .toString()
        .padStart(2, "0");
    const status = calculateStatus(totalSeconds, isExpired);
    const canReopen = Boolean(reopenAvailableAt && currentTimestamp >= reopenAvailableAt);

    return {
        minutes,
        seconds,
        totalSeconds,
        timeLeft,
        status,
        isExpired,
        reopenAvailableAt,
        canReopen,
        resetCountdown,
        currentTimestamp,
    } as const;
}
