import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="8sian Collectibles">
    <Container>
      <Title>
        8SIAN CNY Collectibles <Badge>2022-</Badge>
      </Title>
      <P>
        A festive collectible with 3 designs <small>(888 copies each)</small>{' '}
        with ERC1155 contract.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://opensea.io/collection/8siancollectibles">
            8SIAN Collectibles <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JQuery, HTML, Javascript, CSS, Hardhat, Solidity, Remix</span>
        </ListItem>
        <ListItem>
          <Meta>Smart Contract Standard</Meta>
          <span>ERC1155</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
