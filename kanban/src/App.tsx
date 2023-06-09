import { Heading, Container } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Heading
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, rgb(28, 215, 221), rgb(168, 93, 204))"
        bgClip="text"
        mt={4}
      >
        Kanban on React.JS
      </Heading>
      <Container
        maxWidth="container.lg"
        px={4}
        py={10}
      ></Container>
    </>
  );
}

export default App;
