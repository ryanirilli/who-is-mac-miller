import { Container, Text } from "@chakra-ui/react";
import PageHeight from "../components/PageHeight";
import Opening from "../components/story/Opening";
import Intro from "../components/story/Intro";
import FirstMixtapeTimeline from "../components/story/FirstMixtapeTimeline";
import EasyMac from "../components/story/EasyMac";
import BlueSlidePark from "../components/story/BlueSlidePark";

export default function Home() {
  return (
    <>
      <Opening />
      <Intro />
      <FirstMixtapeTimeline />
      <EasyMac />
      <PageHeight></PageHeight>
      <BlueSlidePark />
      <Container>
        <Text textStyle="h2" my={16}>
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
