import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  useColorModeValue,
  useClipboard,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => {
  const { onCopy } = useClipboard('zensein#5412')
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a full-stack developer based in Malaysia!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Popover placement="top-start">
              <PopoverTrigger>
                <Button variant={'unstyled'} _focus={{ outline: 'none' }}>
                  <Heading
                    as="h2"
                    variant="page-title"
                    onClick={onCopy}
                    cursor="pointer"
                  >
                    Zensein#5412
                  </Heading>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                background="rgba(255, 255, 255, 0.85)"
                _focus={{ outline: 'none' }}
                w="100px"
                textAlign="center"
              >
                <PopoverBody>Copied!</PopoverBody>
              </PopoverContent>
            </Popover>

            <p>Digital Craftsman ( Developer / Analyst )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/pfp.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Zensein#5412 is a freelance and a full-stack developer based in
            Malaysia with a passion for building the digital world. He has a
            knack for launching products, from planning and designing, all the
            way to solving real-life problems with code.
          </Paragraph>
          <Paragraph>
            When not online, he is a sports enthusiast and loves playing
            badminton or swimming. Venturing into the exciting Web3 space,
            favourite stack includes{' '}
            <Link href="https://docs.ethers.io/v5/" isExternal={true}>
              EthersJs
            </Link>
            ,{' '}
            <Link href="https://hardhat.org/" isExternal={true}>
              Hardhat
            </Link>{' '}
            and{' '}
            <Link href="https://nextjs.org/" isExternal={true}>
              NextJs.
            </Link>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/portfolio">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1991</BioYear>
            Born in Johor (柔佛), Malaysia.
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Completed the Bachelor&apos;s Program in the University of Melbourne
            in Australia
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Worked at UOB Bank Malaysia as Credit Analyst
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Worked at Nielsen as Client Service Analyst
          </BioSection>
          <BioSection>
            <BioYear>2016 till 2021</BioYear>
            Work as a Risk Analyst
          </BioSection>
          <BioSection>
            <BioYear>2021 till present</BioYear>
            Full Stack Developer @ Monsta Infinite
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Playing Piano, Programming, Cryptocurrencies, Philosophy
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Tech
          </Heading>
          <Paragraph>
            Javascript, Typescript, React, Solidity, Html, CSS
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Speaks
          </Heading>
          <Paragraph>English, Mandarin, Cantonese, Malay</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
