import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="OpenTunes">
    <Container>
      <Title>
        OpenTunes <Badge>2021-</Badge>
      </Title>
      <P>
        A website for music artists to mint and sell their NFTs. Project is
        currently work in progress.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.opentunes.io/">
            https://www.opentunes.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NextJS, EthersJS, Hardhat, Solidity</span>
        </ListItem>
        <ListItem>
          <Meta>Linkedin</Meta>
          <Link href="https://www.linkedin.com/posts/1337ventures_asda-alphastartups-1337ventures-activity-6851747834241404928-SMAX">
            Top 10 Finalists of Cohort 38 by 1337 Ventures{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
