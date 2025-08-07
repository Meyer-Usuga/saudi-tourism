import { useEffect, useRef } from "react";

type Animation = {
  class: string;
  threshold: number;
  repeat: boolean;
};

export const useAnimationInView = (animation: Animation) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        if (entry.target instanceof HTMLElement) {
          onAnimateIntersection(entry, isIntersecting, observer);
        }
      },
      { threshold: animation.threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, animation]);

  const onAnimateIntersection = (
    entry: IntersectionObserverEntry,
    isIntersecting: boolean,
    observer: IntersectionObserver
  ) => {
    if (isIntersecting) {
      entry.target.classList.remove("animatedOpening");
      entry.target.classList.add("animate__animated", animation.class);

      if (!animation.repeat) {
        observer.unobserve(entry.target);
      }
    } else if (animation.repeat) {
      entry.target.classList.remove(animation.class);
    }
  };

  return {
    ref,
  } as const;
};
