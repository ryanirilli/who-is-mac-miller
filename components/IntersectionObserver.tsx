import { useEffect, useRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface Props extends BoxProps {
  children: React.ReactNode;
  observerOptions?: IntersectionObserverInit;
  observerCallback: IntersectionObserverCallback;
}

export default function IntersectionObserver({
  children,
  observerOptions = {},
  observerCallback,
  ...rest
}: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      return;
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      ...observerOptions,
    };

    const observer = new window.IntersectionObserver(observerCallback, options);

    observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box ref={containerRef} {...rest}>
      {children}
    </Box>
  );
}
