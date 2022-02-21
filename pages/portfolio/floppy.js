import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="OpenTunes">
    <Container>
      <Title>
        Floppy NFT <Badge>2022-</Badge>
      </Title>
      <P>
        A 10,000 NFT collection with a <i>cool</i> website design and{' '}
        <i>interactive</i> {''}
        mint page.
      </P>
      <P>
        Project successfully sold out in <b>5 minutes</b> during public sale.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.floppynft.io/">
            https://www.floppynft.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NextJS, EthersJS, Hardhat, Solidity</span>
        </ListItem>
        <ListItem>
          <Meta>Smart Contract Standard</Meta>
          <span>ERC721A - with extra optimizations to reduce gas fees</span>
        </ListItem>
        <ListItem>
          <Meta>Extras</Meta>
          <span>
            Provenance Hash - Implemented to ensure no changes in collection
            order
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
