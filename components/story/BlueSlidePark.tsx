import Image from "next/image";
import { Box, AspectRatio, Container } from "@chakra-ui/react";
export default function BlueSlidePark() {
  return (
    <Container maxW="container.lg">
      <Box my={40}>
        <Box maxW={96}>
          <Image
            priority
            layout="responsive"
            src="/blue-slide-park-album-cover.jpg"
            width={489}
            height={493}
          />
        </Box>
      </Box>
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
