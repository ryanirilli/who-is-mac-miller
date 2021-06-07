import { useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import IntersectionObserver from "../IntersectionObserver";
import Lottie from "../Lottie";
import timeline from "../../public/timeline.json";

export default function FirstMixtapeTimeline() {
  const [shouldPlayIntroLine, setShouldPLayIntroLine] = useState(false);
  return (
    <Container textStyle="p">
      <Flex direction="column" align="center" mt={16}>
        <IntersectionObserver
          observerOptions={{ threshold: 1 }}
          observerCallback={(entries) => {
            if (entries[0].isIntersecting && !shouldPlayIntroLine) {
              setShouldPLayIntroLine(true);
            }
          }}
        >
          <Lottie
            lottieOptions={{
              loop: false,
              autoplay: false,
              animationData: timeline,
            }}
            shouldPlay={shouldPlayIntroLine}
          />
        </IntersectionObserver>
      </Flex>
    </Container>
  );
}
