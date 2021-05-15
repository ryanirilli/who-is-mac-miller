import { useEffect, useRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import lottie, { AnimationConfigWithData, AnimationItem } from "lottie-web";
import useWindowScroll from "../hooks/useWindowScroll";

export type HandleLottieScroll = (
  scrollValue: number,
  lottiePlayer: AnimationItem
) => void;

interface Props extends BoxProps {
  lottieOptions: Partial<AnimationConfigWithData>;
  handleScroll?: HandleLottieScroll;
}

export default function Lottie({
  lottieOptions = {} as AnimationConfigWithData,
  handleScroll,
  ...rest
}: Props): JSX.Element {
  const lottieRef = useRef<AnimationItem>(null);
  const conatinerRef = useRef<HTMLDivElement>();
  useWindowScroll((scrollVal) => {
    handleScroll && handleScroll(scrollVal, lottieRef.current);
  });

  useEffect(() => {
    lottieRef.current = lottie.loadAnimation({
      container: conatinerRef.current,
      ...lottieOptions,
    });
    return () => {
      lottieRef.current.destroy();
    };
  }, []);

  return <Box ref={conatinerRef} {...rest} />;
}
