import { Container, Text, Flex } from "@chakra-ui/react";
import Lottie from "../Lottie";
import timeline from "../../public/timeline.json";
import IntersectionObserver from "../IntersectionObserver";
import { useState } from "react";

export default function Intro() {
  const [shouldPlayIntroLine, setShouldPLayIntroLine] = useState(false);
  return (
    <Container textStyle="p">
      <Text mb={8}>
        <strong>Malcolm James McCormick</strong> was born on January 19, 1992.
        He grew up to be one of the brightest young musical talents of his
        generation, impossible to confine by a single genre. Ultimately, Mac was
        a rapper, coming of age during a time when aspiring independent rap
        artists were a dime a dozen.
      </Text>
      <Text>
        But he was much more than an artist to many people. His charisma,
        personality, and energy was a huge part of his influence on his fans and
        the people who knew him best. It was a mentality that is consistently
        ascribed to him by many of the iconic names in the industry today,
        including Kendrick Lamar and John Mayer. Below is a snapshot of some of
        Mac Miller's career defining moments, celebrating his lifetime of
        achievements.
      </Text>
      <Flex direction="column" align="center" mt={16}>
        <IntersectionObserver
          observerOptions={{ threshold: 0.9 }}
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
