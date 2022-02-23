import { Container, Heading, SimpleGrid, chakra } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOpenTunes from '../public/images/opentunes.png'
import thumbAvalanche from '../public/images/avalanche.png'
import thumbFloppy from '../public/images/floppy.png'
import thumb8sian from '../public/images/8sian.png'
import thumbShopifyUpsell from '../public/images/shopifyupsell.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="opentunes"
            title="Opentunes"
            thumbnail={thumbOpenTunes}
          >
            <chakra.span fontSize={10} display="block">
              (WIP)
            </chakra.span>
            A website for music artists to mint and sell their NFTs.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="shopifyupsell"
            title="Shopify Upsell"
            thumbnail={thumbShopifyUpsell}
          >
            An app that allows merchants to be able to setup post purchase
            offerings to buyers on Shopify.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="floppy" title="Floppy NFT" thumbnail={thumbFloppy}>
            A NFT colleciton launch with cool website design and mint function
            integrated on the website itself.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="8sian"
            title="8SIAN CNY Collectibles"
            thumbnail={thumb8sian}
          >
            A CNY special edition collection for the 8sian community based on
            ERC1155 contract.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Heading as="h3" fontSize={20} mb={4}>
        Current Activity
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="avalanche"
            title="Avalanche Hackathon"
            thumbnail={thumbAvalanche}
          >
            A hackathon to supercharge the development of dApps, Web3 apps, and
            DeFi projects. Winners will be able to showcase their projects to
            prominent Venture Capitals.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
