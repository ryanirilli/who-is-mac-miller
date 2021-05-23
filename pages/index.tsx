import { Container, Flex, Text, Box } from "@chakra-ui/react";
import PageHeight from "../components/PageHeight";
import macOutline from "../public/mac-outline-animation-data.json";
import Intro from "../components/story/Intro";
import EasyMac from "../components/story/EasyMac";
import Lottie, { HandleLottieScroll } from "../components/Lottie";
import { scaleLinear } from "d3-scale";

let scale;
const handleScroll: HandleLottieScroll = (scrollVal, player) => {
  scale =
    scale ||
    scaleLinear()
      .domain([0, window.innerHeight / 1.8])
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
            <Flex alignItems="center" flex={1} pl={[4, null, 0]}>
              <Text as="h1" textStyle="h2" w="100%" textAlign="left">
                <Box as="span" display="inline-block" mb={4} fontFamily="edita">
                  who is
                </Box>{" "}
                <br />
                <Box as="span" textStyle="h1Bold">
                  Mac Miller?
                </Box>
              </Text>
            </Flex>
            <Lottie
              maxW="600px"
              lottieOptions={{
                loop: false,
                animationData: macOutline,
              }}
              handleScroll={handleScroll}
            />
          </Flex>
        </Container>
      </PageHeight>
      <Intro />
      <EasyMac />
      <Container>
        <Text textStyle="h1" my={16}>
          I just make, whatever I wanna make, and then I just like...try and,
          fight for it I guess.
        </Text>
      </Container>
      <PageHeight></PageHeight>
      <PageHeight></PageHeight>
      <PageHeight></PageHeight>
    </>
  );
}
