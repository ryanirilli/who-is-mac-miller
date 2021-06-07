import { Box, BoxProps } from "@chakra-ui/react";
import { useAnimation, motion, Orchestration } from "framer-motion";
import { useEffect } from "react";

interface Props extends BoxProps {
  children: React.ReactNode;
  animationTransition?: Orchestration;
}

export default function AnimatedClip({
  children,
  animationTransition = {},
  ...rest
}: Props & BoxProps): JSX.Element {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
    });
  });
  return (
    <Box
      {...rest}
      sx={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      <motion.div
        animate={controls}
        initial={{ y: 25, opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeOut",
          ...animationTransition,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
