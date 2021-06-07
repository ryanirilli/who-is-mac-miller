import { scaleLinear } from "d3-scale";
import PageHeight from "../PageHeight";
import { Flex, Box, Text, Container } from "@chakra-ui/react";
import AnimatedClip from "../AnimatedClip";
import Lottie, { HandleLottieScroll } from "../Lottie";
import macOutline from "../../public/mac-outline-animation-data.json";

let scale;
const handleScroll: HandleLottieScroll = (scrollVal, player) => {
  scale =
    scale ||
    scaleLinear()
      .domain([0, window.innerHeight / 2])
      .range([0, player.totalFrames]);
  const val = scale(scrollVal);
  player.goToAndStop(player.totalFrames - val, true);
};

const delay = 1;

export default function Opening() {
  return (
    <PageHeight
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Container maxW="container.lg">
        <Flex direction={["column", null, "row"]}>
          <Flex alignItems="center" flex={1}>
            <Box>
              <AnimatedClip animationTransition={{ delay }}>
                <Text
                  as="h1"
                  textStyle="h1"
                  fontFamily="edita"
                  letterSpacing="-4px"
                  transform="translateX(16px)"
                >
                  who is
                </Text>
              </AnimatedClip>
              <AnimatedClip p={2} animationTransition={{ delay: delay + 0.3 }}>
                <Text as="h1" textStyle="h2" w="100%" textAlign="left">
                  <Box as="span" textStyle="h1Bold">
                    Mac Miller?
                  </Box>
                </Text>
              </AnimatedClip>
            </Box>
          </Flex>
          <Lottie
            maxW="550px"
            lottieOptions={{
              loop: false,
              animationData: macOutline,
            }}
            handleScroll={handleScroll}
          />
        </Flex>
      </Container>
    </PageHeight>
  );
}
