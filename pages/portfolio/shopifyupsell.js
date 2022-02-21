import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shopify Upsell">
    <Container>
      <Title>
        Shopify Upsell App <Badge>2021-</Badge>
      </Title>
      <P>
        A shopify plugin app that allows merchant to configure post purchase
        offerings to buyers.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Shopify</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NextJS, NodeJS, Redux, Prisma, mySQL</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
