import { useEffect, useState } from "react";

export function useStickyHeader(sentinelId = "hero-sentinel"): boolean {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const sentinel = document.getElementById(sentinelId);
    if (!sentinel) {
      setIsSticky(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [sentinelId]);

  return isSticky;
}
