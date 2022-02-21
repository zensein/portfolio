import {
  Container,
  Heading,
  Link,
  UnorderedList,
  ListItem,
  Box,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Mint from '../components/mints'
import SmileyContract from '../contracts/Smileys.json'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Section mt={4}>
        <Heading as="h3" fontSize={20} mb={4}>
          Mint
        </Heading>

        <Paragraph>
          A simple ERC721 token standard collection of Smileys deployed on the
          Rinkeby Testnet.
        </Paragraph>
      </Section>
      <Box delay={0.1} mb={8} textAlign={'center'}>
        <Mint />
      </Box>
      <Divider my={6} />
      <Section delay={0.3} mt={4}>
        <Heading as="h3" fontSize={20} mb={4}>
          Details
        </Heading>
        <BioSection>
          <BioYear>Contract Address</BioYear>
          <Link
            href={`https://rinkeby.etherscan.io/address/${SmileyContract.address}`}
          >
            Smiley (SML) on Etherscan
            <ExternalLinkIcon mx="2px" />
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>Features</BioYear>
        </BioSection>
        <UnorderedList my={4} pl={'3.4em'}>
          <ListItem>Full on-chain metadata</ListItem>

          <ListItem>On-chain generative SVG</ListItem>
        </UnorderedList>
        <BioSection>
          <BioYear>OpenSea Collection</BioYear>
          <Link href="https://testnets.opensea.io/collection/smileys-3zsodcnpao">
            OpenSea Collection
            <ExternalLinkIcon mx="2px" />
          </Link>
        </BioSection>
      </Section>
    </Container>
  </Layout>
)

export default Works
