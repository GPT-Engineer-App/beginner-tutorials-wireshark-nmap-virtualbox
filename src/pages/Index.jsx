import { Container, Text, VStack, Heading, Link, Box, IconButton } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

const tutorials = [
  {
    title: "Wireshark",
    description: "Wireshark is a network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.",
    youtubeLink: "https://www.youtube.com/watch?v=TkCSr30UojM",
  },
  {
    title: "Nmap",
    description: "Nmap is a network scanning tool used to discover hosts and services on a computer network by sending packets and analyzing the responses.",
    youtubeLink: "https://www.youtube.com/watch?v=pgD1eOoSqFg",
  },
  {
    title: "VirtualBox",
    description: "VirtualBox is a powerful x86 and AMD64/Intel64 virtualization product for enterprise as well as home use.",
    youtubeLink: "https://www.youtube.com/watch?v=1WhYJ9mZrJw",
  },
  {
    title: "Autopsy",
    description: "Autopsy is a digital forensics platform and graphical interface to The Sleuth Kit and other digital forensics tools.",
    youtubeLink: "https://www.youtube.com/watch?v=2O7QdF7nqfA",
  },
  {
    title: "PuTTY",
    description: "PuTTY is a free and open-source terminal emulator, serial console and network file transfer application.",
    youtubeLink: "https://www.youtube.com/watch?v=J3w5t5L1uGk",
  },
  {
    title: "Packet Tracer",
    description: "Packet Tracer is a cross-platform visual simulation tool designed by Cisco Systems that allows users to create network topologies and imitate modern computer networks.",
    youtubeLink: "https://www.youtube.com/watch?v=8zO0SHH9m1k",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Beginner Tutorials
        </Heading>
        {tutorials.map((tutorial, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg">
              {tutorial.title}
            </Heading>
            <Text mt={4}>{tutorial.description}</Text>
            <Link href={tutorial.youtubeLink} isExternal mt={4}>
              <IconButton aria-label={`Watch ${tutorial.title} tutorial`} icon={<FaYoutube />} size="lg" colorScheme="red" />
            </Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
