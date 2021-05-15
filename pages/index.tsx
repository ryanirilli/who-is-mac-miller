import { Container, Flex, Text, Box } from "@chakra-ui/react";
import PageHeight from "../components/PageHeight";
import macOutline from "../public/mac-outline-animation-data.json";
import Lottie, { HandleLottieScroll } from "../components/Lottie";
import Clouds from "../components/Clouds";
import { scaleLinear } from "d3-scale";

let scale;
const handleScroll: HandleLottieScroll = (scrollVal, player) => {
  scale =
    scale ||
    scaleLinear()
      .domain([0, window.innerHeight / 4])
      .range([0, player.totalFrames]);
  const val = scale(scrollVal);
  player.goToAndStop(player.totalFrames - val, true);
};

export default function Home() {
  return (
    <>
      <PageHeight
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Container maxW="container.lg">
          <Flex direction={["column", null, "row"]}>
            <Flex alignItems="center" flex={1}>
              <Text as="h1" textStyle="h2" w="100%" textAlign="left">
                who is <br />
                <Box as="span" textStyle="h1Bold">
                  Mac Miller?
                </Box>
              </Text>
            </Flex>
            <Lottie
              maxW="container.sm"
              lottieOptions={{
                loop: false,
                animationData: macOutline,
              }}
              handleScroll={handleScroll}
            />
          </Flex>
        </Container>
        <Box position="absolute" w="100%" bottom={0} left={0} h="700px">
          <Clouds />
        </Box>
      </PageHeight>

      <PageHeight></PageHeight>
      <PageHeight></PageHeight>
      <PageHeight></PageHeight>
      <PageHeight></PageHeight>
    </>
  );
}
