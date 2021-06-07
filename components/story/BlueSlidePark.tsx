import { useState } from "react";
import PageHeight from "../PageHeight";
import { Text, Flex, Box, AspectRatio, Container } from "@chakra-ui/react";
import IntersectionObserver from "../IntersectionObserver";
import AnimatedClip from "../AnimatedClip";
import blueSlidePark from "../../public/blue-slide-park.json";
import Lottie from "../Lottie";

export default function BlueSlidePark() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Container maxW="container.lg">
      <Box my={40}>
        <IntersectionObserver
          observerOptions={{ threshold: 0.8 }}
          observerCallback={(entires) => {
            if (entires[0].isIntersecting && !isShowing) {
              setIsShowing(true);
            }
          }}
        >
          <Flex direction={["column-reverse", null, "row"]}>
            <Box mt={[8, null, 0]} flexBasis={["100%", null, "50%"]}>
              <Lottie
                shouldPlay={isShowing}
                lottieOptions={{
                  autoplay: false,
                  animationData: blueSlidePark,
                  loop: false,
                }}
              />
            </Box>
            <Box pl={[0, null, 16]} flexBasis={["100%", null, "50%"]}>
              {isShowing && (
                <>
                  <AnimatedClip>
                    <Text textStyle="h2">Blue Slide Park</Text>
                  </AnimatedClip>
                  <AnimatedClip animationTransition={{ delay: 0.3 }}>
                    <Text textStyle="p" mt={4}>
                      By the end of 2011, Mac had shed the corny moniker and
                      released his first full length independent album. Less
                      than critically acclaimed, it was a showing that
                    </Text>
                  </AnimatedClip>
                </>
              )}
            </Box>
          </Flex>
        </IntersectionObserver>
      </Box>
      <PageHeight></PageHeight>
      <AspectRatio ratio={16 / 9}>
        <Box
          as="iframe"
          width="100%"
          src="https://www.youtube.com/embed/ys-9b9QI3Q4"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      </AspectRatio>
    </Container>
  );
}
