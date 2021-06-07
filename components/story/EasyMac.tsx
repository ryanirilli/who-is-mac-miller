import { useEffect, useState } from "react";
import Lottie from "../Lottie";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import timelineDot from "../../public/timeline-dot.json";
import IntersectionObserver from "../IntersectionObserver";
import { motion, useAnimation } from "framer-motion";

export default function EasyMac() {
  const [isShowing, setIsShowing] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isShowing) {
      controls.start({
        opacity: 1,
      });
    }
  }, [isShowing, controls]);

  return (
    <IntersectionObserver
      observerOptions={{ threshold: 0.8 }}
      observerCallback={(entires) => {
        if (entires[0].isIntersecting && !isShowing) {
          setIsShowing(true);
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Container>
          <Flex direction="column" align="center">
            <Lottie
              transform="translateY(-24px)"
              w="50px"
              h="50px"
              lottieOptions={{
                animationData: timelineDot,
              }}
            />
            <Box textStyle="mono" textAlign="center">
              <Text>2007</Text>
              <Text>Easy Mac - But My Mackin' Ain't Easy</Text>
              <Text>My Biography</Text>
            </Box>
            <Box
              as="audio"
              mt={8}
              controls
              src="./07-but-my-mackin-aint-easy-my biography.mp3"
            />
          </Flex>
          <Box textStyle="p">
            <Text my={16}>
              At just 15 years old, Mac realesed his first mixtape. Ignoring the
              production quality or the unrefined delivery, you have to respect
              a young man who had certainly found his calling in music and
              enough ambition to produce something listenable. This early
              footprint is the foundation on which he would grow and mature as a
              professional artist, and set the stage for the his mass following.
            </Text>
          </Box>
        </Container>
      </motion.div>
    </IntersectionObserver>
  );
}
