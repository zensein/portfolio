import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelSheepLoader from '../voxel-sheep-loader'

const LazyVoxelSheep = dynamic(() => import('../voxel-sheep'), {
  ssr: false,
  loading: () => <VoxelSheepLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="zensein's homepage" />
        <meta name="author" content="zensein" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="zensein" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="zensein Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Zensein#5412 - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelSheep />

        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
