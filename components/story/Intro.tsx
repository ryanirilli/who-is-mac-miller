import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container, Text, Flex } from "@chakra-ui/react";
import Lottie from "../Lottie";
import timeline from "../../public/timeline.json";
import IntersectionObserver from "../IntersectionObserver";

export default function Intro() {
  const controls = useAnimation();
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isShowing) {
      controls.start({
        opacity: 1,
        y: 0,
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
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Container textStyle="p">
          <Text mb={8}>
            <strong>Malcolm James McCormick</strong> was born on January 19,
            1992. He grew up to be one of the brightest young musical talents of
            his generation, impossible to confine by a single genre. Ultimately,
            Mac was a rapper, coming of age during a time when aspiring
            independent rap artists were a dime a dozen. By the time of his
            untimely passing, he had released 5 studio albums, 13 mixtapes, and
            one posthumous album, Circles.
          </Text>
          <Text>
            But he was much more than an artist to many people. His charisma,
            personality, and energy was a huge part of his influence on his fans
            and the people who knew him best. It was a mentality that is
            consistently ascribed to him by many of the iconic names in the
            industry today, including Kendrick Lamar and John Mayer. Below is a
            timeline of some of Mac Miller's career defining releases,
            celebrating his life and accomplishments.
          </Text>
        </Container>
      </motion.div>
    </IntersectionObserver>
  );
}
