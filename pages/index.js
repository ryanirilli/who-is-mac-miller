import { Container, Flex, Text } from "@chakra-ui/react";
import PageHeight from "../components/PageHeight";
import macOutline from "../public/mac-outline-animation-data.json";
import Lottie from "../components/Lottie";

export default function Home() {
  return (
    <>
      <PageHeight
        position="fixed"
        top={0}
        left={0}
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="container.lg">
          <Flex direction={["column", null, "row"]}>
            <Flex alignItems="center" flex={1}>
              <Text as="h1" textStyle="h1" w="100%" textAlign="left">
                Who is <br />
                Mac Miller?
              </Text>
            </Flex>
            <Lottie
              maxW="container.sm"
              lottieOptions={{
                loop: false,
                animationData: macOutline,
              }}
            />
          </Flex>
        </Container>
      </PageHeight>
      <PageHeight></PageHeight>
      <PageHeight></PageHeight>
      <PageHeight></PageHeight>
      <PageHeight></PageHeight>
    </>
  );
}
