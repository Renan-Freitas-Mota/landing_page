import { Suspense, lazy, useEffect } from "react";
import { InView } from "react-intersection-observer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { UrgencyManager } from "@/features/urgency/UrgencyManager";

// Lazy-loaded sections (named exports mapped to default for React.lazy)
const LazyVideoSection = lazy(() =>
    import("@/components/VideoSection").then((m) => ({ default: m.VideoSection }))
);
const LazyInvestmentCalculator = lazy(() =>
    import("@/components/InvestmentCalculator").then((m) => ({ default: m.InvestmentCalculator }))
);
const LazyCryptoCarousel = lazy(() =>
    import("@/components/CryptoCarousel").then((m) => ({ default: m.CryptoCarousel }))
);
const LazyNewsGrid = lazy(() => import("@/components/NewsGrid").then((m) => ({ default: m.NewsGrid })));
const LazyTestimonials = lazy(() =>
    import("@/components/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const LazyProductGrid = lazy(() => import("@/components/ProductGrid").then((m) => ({ default: m.ProductGrid })));
const LazyFinalCTA = lazy(() => import("@/components/FinalCTA").then((m) => ({ default: m.FinalCTA })));
const LazyAbout = lazy(() => import("@/components/About").then((m) => ({ default: m.About })));
const LazyFAQ = lazy(() => import("@/components/FAQ").then((m) => ({ default: m.FAQ })));
const LazyFooter = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));
const LazyFloatingCTA = lazy(() => import("@/components/FloatingCTA").then((m) => ({ default: m.FloatingCTA })));

const Index = () => {
    // Prefetch lazy chunks during idle time to minimize scroll-time delay
    useEffect(() => {
        const idle = (window as any).requestIdleCallback ?? ((cb: any) => setTimeout(cb, 1));
        idle(() => {
            import("@/components/VideoSection");
            import("@/components/CryptoCarousel");
            import("@/components/NewsGrid");
            import("@/components/Testimonials");
            import("@/components/ProductGrid");
            import("@/components/FinalCTA");
            import("@/components/About");
            import("@/components/FAQ");
            import("@/components/Footer");
            import("@/components/FloatingCTA");
        });
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <UrgencyManager />
            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[200px] w-full animate-pulse bg-muted/20" />}>
                                <LazyInvestmentCalculator />
                            </Suspense>
                        ) : (
                            <div className="h-[200px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[400px] w-full animate-pulse bg-muted/30" />}>
                                <LazyVideoSection />
                            </Suspense>
                        ) : (
                            <div className="h-[400px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[260px] w-full animate-pulse bg-muted/30" />}>
                                <LazyCryptoCarousel />
                            </Suspense>
                        ) : (
                            <div className="h-[260px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[600px] w-full animate-pulse bg-muted/30" />}>
                                <LazyNewsGrid />
                            </Suspense>
                        ) : (
                            <div className="h-[600px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[500px] w-full animate-pulse bg-muted/30" />}>
                                <LazyTestimonials />
                            </Suspense>
                        ) : (
                            <div className="h-[500px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[600px] w-full animate-pulse bg-muted/30" />}>
                                <LazyProductGrid />
                            </Suspense>
                        ) : (
                            <div className="h-[600px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[380px] w-full animate-pulse bg-muted/30" />}>
                                <LazyFinalCTA />
                            </Suspense>
                        ) : (
                            <div className="h-[380px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[500px] w-full animate-pulse bg-muted/30" />}>
                                <LazyAbout />
                            </Suspense>
                        ) : (
                            <div className="h-[500px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[400px] w-full animate-pulse bg-muted/30" />}>
                                <LazyFAQ />
                            </Suspense>
                        ) : (
                            <div className="h-[400px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <InView triggerOnce rootMargin="800px">
                {({ inView, ref }) => (
                    <div ref={ref}>
                        {inView ? (
                            <Suspense fallback={<div className="h-[280px] w-full animate-pulse bg-muted/30" />}>
                                <LazyFooter />
                            </Suspense>
                        ) : (
                            <div className="h-[280px] w-full animate-pulse bg-muted/10" />
                        )}
                    </div>
                )}
            </InView>

            <Suspense fallback={null}>
                <LazyFloatingCTA />
            </Suspense>
        </div>
    );
};

export default Index;
