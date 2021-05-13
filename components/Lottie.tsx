import { useEffect, useRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import lottie from "lottie-web";

interface Props extends BoxProps {
  lottieOptions: any;
}

export default function Lottie({
  lottieOptions = {},
  ...rest
}: Props): JSX.Element {
  const conatinerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const player = lottie.loadAnimation({
      container: conatinerRef.current,
      ...lottieOptions,
    });
    return () => {
      player.destroy();
    };
  }, []);

  return <Box ref={conatinerRef} {...rest} />;
}
