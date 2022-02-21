import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import SmileyContract from '../contracts/Smileys.json'
import { Button, Box, Image, Heading, Link, useToast } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { NETWORKS } from '../lib/constants'

const targetNetwork = NETWORKS.rinkeby

const Mint = () => {
  const [web3, setWeb3] = useState(null)
  const [tokenId, setTokenId] = useState(20)
  const [tokenURI, setTokenURI] = useState(null)
  const toast = useToast()

  const getWeb3 = async isFirstLoad => {
    try {
      let web3
      if (window.ethereum) {
        // Ask User permission to connect to Metamask
        if (!isFirstLoad) {
          try {
            await web3.provider.send('eth_requestAccounts')
          } catch (err) {
            console.log('Transaction rejected by user:', err)
          }
        }
        web3 = new ethers.providers.Web3Provider(window.ethereum)
      } else if (window.web3) {
        web3 = new ethers.providers.Web3Provider(window.web3.currentProvider)
      } else {
        toast({
          title: 'Non-Ethereum browser detected',
          description: 'Please install MetaMask plugin',
          status: 'error',
          duration: 3000,
          position: 'top-right',
          isClosable: true,
          variant: 'subtle'
        })
        return
      }
      setWeb3(web3)
    } catch (err) {
      console.log('Error in Web3.js -> getWeb3(): ', err)
    }
  }

  const checkNetwork = async () => {
    // Check if they are currently on the Rinkeby network "0x4"
    const currentChainId = (await web3.getNetwork()).chainId
    if (currentChainId !== 4) {
      const ethereum = window.ethereum
      const data = [
        {
          chainId: '0x' + targetNetwork.chainId.toString(16),
          chainName: targetNetwork.name,
          nativeCurrency: targetNetwork.nativeCurrency,
          rpcUrls: [targetNetwork.rpcUrl],
          blockExplorerUrls: [targetNetwork.blockExplorer]
        }
      ]
      console.log('data:', data)
      let switchTx
      // https://docs.metamask.io/guide/rpc-api.html#other-rpc-methods
      try {
        switchTx = await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: data[0].chainId }]
        })

        const newWeb3 = new ethers.providers.Web3Provider(window.ethereum)
        setWeb3(newWeb3)
        return newWeb3
      } catch (switchError) {
        // not checking specific error code, because maybe we're not using MetaMask
        try {
          switchTx = await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: data
          })
          const newWeb3 = new ethers.providers.Web3Provider(window.ethereum)
          setWeb3(newWeb3)
          return newWeb3
        } catch (addError) {
          // handle "add" error
        }
      }

      if (switchTx) {
        console.log(switchTx)
      }
    }
    return web3
  }

  const mintFnc = async () => {
    // Check if Rinkeby network is connected
    const web3 = await checkNetwork()
    await web3.provider.send('eth_requestAccounts')
    const signer = web3.getSigner()

    const smiley = new ethers.Contract(
      SmileyContract.address,
      SmileyContract.abi,
      signer
    )

    // Get Token ID from Emitted Transfer Event
    smiley.once('Transfer', async (_to, _from, id) => {
      setTokenId(+id)
      // We get back base64 data
      const base64Metadata = await smiley.tokenURI(+id)
      console.log('tokenMedata', tokenMetadata)
      const json = Buffer.from(
        base64Metadata.substring(29),
        'base64'
      ).toString()
      // Parse JSON string
      const tokenMetadata = JSON.parse(json)
      // Set tokenURI to image property
      setTokenURI(tokenMetadata.image)
    })

    // Minting
    const result = await smiley.mintItem()
    await result.wait()
  }

  useEffect(() => {
    // Check for Web3 on first load
    const init = async () => {
      await getWeb3(true)
    }
    init()
  }, [])

  useEffect(() => {}, [tokenURI])

  useEffect(() => {
    // If web3 exist detect any changes to the provider and update
    if (web3) {
      const { provider } = web3

      if (provider?.on) {
        const handleChainChanged = chainId => {
          console.log(`chain changed to ${chainId}! updating providers`)
          setWeb3(new ethers.providers.Web3Provider(provider))
        }

        const handleAccountsChanged = () => {
          console.log(`account changed!`)
          setWeb3(new ethers.providers.Web3Provider(provider))
        }

        // Subscribe to session disconnection
        const handleDisconnect = (code, reason) => {
          console.log(code, reason)
          console.log('disconnecting..')
        }

        provider.on('chainChanged', handleChainChanged)
        provider.on('accountsChanged', handleAccountsChanged)
        provider.on('disconnect', handleDisconnect)

        return () => {
          if (provider.removeListener) {
            provider.removeListener('accountsChanged', handleAccountsChanged)
            provider.removeListener('chainChanged', handleChainChanged)
            provider.removeListener('disconnect', handleDisconnect)
          }
        }
      }
    }
  }, [web3])

  return (
    <>
      <Button colorScheme="teal" onClick={mintFnc}>
        Mint
      </Button>
      {tokenURI && (
        <Box
          border="1px solid white"
          backgroundColor="gray.100"
          p="25px"
          borderRadius="25px"
          mt={8}
        >
          <Heading as="h4" fontSize={20}>
            Your NFT
          </Heading>
          <Box display="flex" justifyContent="center" my={4}>
            <Image src={tokenURI} alt="NFT" />
          </Box>
          <Link
            href={`https://testnets.opensea.io/assets/0x0d826018b53f935572352d5b0c9440e83288e729/${tokenId}`}
          >
            Check out your NFT on OpenSea
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
      )}
    </>
  )
}

export default Mint
