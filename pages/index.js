import { Container } from "@chakra-ui/react";
import PageHeight from "../components/PageHeight";
import macOutline from "../public/mac-outline-animation-data.json";
import Lottie from "../components/Lottie";

export default function Home() {
  return (
    <>
      <PageHeight bg="white">
        <Container maxW="container.lg">
          <Lottie
            lottieOptions={{
              loop: false,
              animationData: macOutline,
            }}
          />
        </Container>
      </PageHeight>
      <PageHeight bg="blue.400"></PageHeight>
      <PageHeight bg="green.400"></PageHeight>
      <PageHeight bg="blue.400"></PageHeight>
      <PageHeight bg="red.400"></PageHeight>
    </>
  );
}
