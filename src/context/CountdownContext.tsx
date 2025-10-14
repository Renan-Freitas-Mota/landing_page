import { createContext, ReactNode, useContext } from "react";

import { useCountdown } from "@/hooks/useCountdown";

type CountdownValue = ReturnType<typeof useCountdown>;

const CountdownContext = createContext<CountdownValue | null>(null);

interface CountdownProviderProps {
  children: ReactNode;
}

export function CountdownProvider({ children }: CountdownProviderProps) {
  const countdown = useCountdown();

  return <CountdownContext.Provider value={countdown}>{children}</CountdownContext.Provider>;
}

export function useCountdownContext() {
  const context = useContext(CountdownContext);

  if (!context) {
    throw new Error("useCountdownContext must be used within a CountdownProvider");
  }

  return context;
}
