import { useEffect, useState, useCallback, useRef } from 'react';

export const usePageNavigation = (totalPages: number) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const touchStartRef = useRef<number>(0);

    const goToPage = useCallback((index: number) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentPage(index);

        // Reset transitioning state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1300); // Match with CSS transition duration (1.2s + 100ms buffer)
    }, [isTransitioning]);

    const nextPage = useCallback(() => {
        const next = (currentPage + 1) % totalPages;
        goToPage(next);
    }, [currentPage, totalPages, goToPage]);

    const prevPage = useCallback(() => {
        const prev = (currentPage - 1 + totalPages) % totalPages;
        goToPage(prev);
    }, [currentPage, totalPages, goToPage]);

    useEffect(() => {
        let scrollAccumulator = 0;
        const scrollThreshold = 100; // Require at least 100px of scroll to trigger
        let resetTimeout: NodeJS.Timeout;

        const handleWheel = (e: WheelEvent) => {
            if (isTransitioning) {
                e.preventDefault();
                return;
            }

            // Check if the event target is within a scrollable container
            let target = e.target as HTMLElement;
            let scrollableParent: HTMLElement | null = null;

            // Walk up the DOM tree to find a scrollable parent
            while (target && target !== document.body) {
                const overflowY = window.getComputedStyle(target).overflowY;
                if (overflowY === 'auto' || overflowY === 'scroll') {
                    scrollableParent = target;
                    break;
                }
                target = target.parentElement as HTMLElement;
            }

            // If we found a scrollable parent, check if we should allow scrolling within it
            if (scrollableParent) {
                const { scrollTop, scrollHeight, clientHeight } = scrollableParent;
                const isAtTop = scrollTop === 0;
                const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

                // Allow scrolling within the container if not at boundaries
                if (e.deltaY > 0 && !isAtBottom) {
                    // Scrolling down and not at bottom - allow scroll
                    scrollAccumulator = 0;
                    return;
                }

                if (e.deltaY < 0 && !isAtTop) {
                    // Scrolling up and not at top - allow scroll
                    scrollAccumulator = 0;
                    return;
                }
            }

            // Accumulate scroll delta
            scrollAccumulator += e.deltaY;

            // Clear existing reset timeout
            clearTimeout(resetTimeout);

            // Check if accumulated scroll exceeds threshold
            if (Math.abs(scrollAccumulator) >= scrollThreshold) {
                const direction = Math.sign(scrollAccumulator);

                if (direction > 0) {
                    nextPage();
                } else if (direction < 0) {
                    prevPage();
                }

                // Reset accumulator after triggering
                scrollAccumulator = 0;
            } else {
                // Reset accumulator after a short delay if no more scrolling
                resetTimeout = setTimeout(() => {
                    scrollAccumulator = 0;
                }, 150);
            }

            e.preventDefault();
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartRef.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isTransitioning) return;

            const touchEnd = e.changedTouches[0].clientY;
            const diff = touchStartRef.current - touchEnd;
            const MathDiff = Math.abs(diff);

            // Require minimum swipe distance (50px)
            if (MathDiff > 50) {
                // Check if the event target is within a scrollable container
                let target = e.target as HTMLElement;
                let scrollableParent: HTMLElement | null = null;

                // Walk up the DOM tree to find a scrollable parent
                while (target && target !== document.body) {
                    const overflowY = window.getComputedStyle(target).overflowY;
                    if (overflowY === 'auto' || overflowY === 'scroll') {
                        scrollableParent = target;
                        break;
                    }
                    target = target.parentElement as HTMLElement;
                }

                if (scrollableParent) {
                    const { scrollTop, scrollHeight, clientHeight } = scrollableParent;
                    const isAtTop = scrollTop === 0;
                    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

                    // If swiping up (scrolling down) and not at bottom, allow native scroll
                    if (diff > 0 && !isAtBottom) {
                        return;
                    }

                    // If swiping down (scrolling up) and not at top, allow native scroll
                    if (diff < 0 && !isAtTop) {
                        return;
                    }
                }

                if (diff > 0) {
                    nextPage();
                } else {
                    prevPage();
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (isTransitioning) return;

            switch (e.key) {
                case 'ArrowDown':
                case 'PageDown':
                    e.preventDefault();
                    nextPage();
                    break;
                case 'ArrowUp':
                case 'PageUp':
                    e.preventDefault();
                    prevPage();
                    break;
                case 'Home':
                    e.preventDefault();
                    goToPage(0);
                    break;
                case 'End':
                    e.preventDefault();
                    goToPage(totalPages - 1);
                    break;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isTransitioning, nextPage, prevPage, goToPage, totalPages]);

    return { currentPage, goToPage, nextPage, prevPage, isTransitioning };
};
