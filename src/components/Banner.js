import React from 'react';
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Tag,
  Text,
  VStack,
  Link,
}
 from '@chakra-ui/react';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import Education from './Education.js';


export default function Banner() {
  return (
    <Container maxW="7xl" alignItems="center" my={5}>
      <Flex
        width="100%"
        maxW={['full', 'full', '7xl']}
        justifyContent="center"
        alignItems="center"
        flexDir={['column', 'column', 'row', 'row']}
      >
        <Flex
          width={['md', 'md', '2xl']}
          flexDir="column"
          justifyContent="space-between"
          bgColor="white"
          color="black"
          maxHeight="2xl"
          minHeight="4xl"
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Box>
            <Flex alignItems="center" justifyContent="center">
              <Image
                borderColor="gray.100"
                src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
                width="32"
              />
            </Flex>

            <Heading textAlign="center">Ravi Verma</Heading>

            <Text fontSize="sm" textAlign="center">
              I am currently doing remote job in one of company in Japan.{' '}
              <Tag variant="solid">Internship</Tag> and <br />{' '}
              <Tag mt={1} variant="solid">
                Job Opportunities
              </Tag>
              <br /> (Degree Completion in 2023).
            </Text>

            <VStack my={4}>
              <Tag px={5} variant="subtle" colorScheme="blue">
                Full Stack Developer
              </Tag>
              <Tag px={5} variant="subtle" colorScheme="blue">
                App Developer
              </Tag>
            </VStack>

            <Box orientation="horizontal" bgColor="gray.300" my={4} height={0.2} />

            {/* Icons Section */}
            <VStack spacing={6} alignItems="start">
              <HStack>
                <Box me={2}>
                  <IconButton
                    aria-label="Email"
                    icon={<FaEnvelope />}
                    shadow="md"
                    variant="ghost"
                    border="1px solid"
                    borderColor="gray.300"
                  />
                </Box>
                <VStack alignItems="start" spacing={0.1}>
                  <Text fontSize="sm">Email</Text>
                  <Text fontWeight="600">rverma952064@gmail.com</Text>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    aria-label="Phone"
                    icon={<FaPhone />}
                    shadow="md"
                    variant="ghost"
                    border="1px solid"
                    borderColor="gray.300"
                  />
                </Box>
                <VStack alignItems="start" spacing={0.1}>
                  <Text fontSize="sm">Phone</Text>
                  <Text fontWeight="600">9264952064</Text>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    shadow="md"
                    variant="ghost"
                    border="1px solid"
                    borderColor="gray.300"
                  />
                </Box>
                <VStack alignItems="start" spacing={0.1}>
                  <Text fontSize="sm">Github</Text>
                  <Link
                    href="https://github.com/Ravi-2064"
                    fontWeight="600"
                    isExternal
                  >
                    github.com/Ravi-2064
                  </Link>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    shadow="md"
                    variant="ghost"
                    border="1px solid"
                    borderColor="gray.300"
                  />
                </Box>
                <VStack alignItems="start" spacing={0.1}>
                  <Text fontSize="sm">LinkedIn</Text>
                  <Link
                    href="https://www.linkedin.com/in/ravi-verma-279a751b8/"
                    fontWeight="600"
                    isExternal
                  >
                    Ravi Verma
                  </Link>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    shadow="md"
                    variant="ghost"
                    border="1px solid"
                    borderColor="gray.300"
                  />
                </Box>
                <VStack alignItems="start" spacing={0.1}>
                  <Text fontSize="sm">Twitter</Text>
                  <Text fontWeight="600">@RaviVer22144062</Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>

          <ButtonGroup
            justifyContent="center"
            alignItems="center"
            variant="ghost"
            spacing={1.9}
            mt={4}
          >
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook size={24} />}
              _hover={{
                color: 'blue.700',
                bgColor: 'blue.50',
                border: '1px solid',
                borderColor: 'blue.700',
              }}
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram size={24} />}
              _hover={{
                color: 'pink.600',
                bgColor: 'pink.50',
                border: '1px solid',
                borderColor: 'pink.600',
              }}
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter size={24} />}
              _hover={{
                color: 'blue.500',
                bgColor: 'blue.50',
                border: '1px solid',
                borderColor: 'blue.500',
              }}
            />
          </ButtonGroup>
        </Flex>

        {/* Education Section */}
        <Box
          ms={['0', '0', '8']}
          flexDir="column"
          justifyContent="space-between"
          bgColor="white"
          color="black"
          maxHeight="4xl"
          scrollBehavior="smooth"
          minHeight="4xl"
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Heading>Education</Heading>
          <Education />
        </Box>
      </Flex>
    </Container>
  );
}
