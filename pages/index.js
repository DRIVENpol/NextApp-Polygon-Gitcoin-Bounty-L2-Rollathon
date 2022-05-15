import React, { useEffect, useState } from "react";
import { 
  Flex, Box, Text,
  Grid, GridItem, 
  Button, Image, Link, Container, Stack, Heading,
  Center, Avatar
  } from '@chakra-ui/react'


  import { networkParams } from "../Utils/Networks";
  import { toHex, truncateAddress } from "../Utils/Utils";
  import { ethers } from "ethers";
  import Web3Modal from "web3modal";
  import { providerOptions } from "../Utils/providerOptions";
  
import Logo from "../Images/NETSY-WHITE.png"



export default function Home({avatars}) {

  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();

  const connectWallet = async () => {
    if (typeof window !== 'undefined'){
      try {
        const { ethereum } = window;
        const web3Modal = new Web3Modal({
          cacheProvider: true, // optional
          providerOptions // required
        });

        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        } else {        const provider = await web3Modal.connect();
          const library = new ethers.providers.Web3Provider(provider);
          const accounts = await library.listAccounts();
          const network = await library.getNetwork();
          setProvider(provider);
          setLibrary(library);
          if (accounts) setAccount(accounts[0]);
          setChainId(network.chainId);}


      } catch (error) {
        setError(error);
      }
    }
   
  };

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const handleInput = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }]
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]]
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const signMessage = async () => {
    if (!library) return;
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account]
      });
      setSignedMessage(message);
      setSignature(signature);
    } catch (error) {
      setError(error);
    }
  };

  const verifyMessage = async () => {
    if (!library) return;
    try {
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signedMessage, signature]
      });
      setVerified(verify === account.toLowerCase());
    } catch (error) {
      setError(error);
    }
  };

  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      providerOptions // required
    });
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      providerOptions // required
    });
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum))
}, []);

  return (
   <>
<Flex>
            <Box bg='#278bff' w='100%'  p={6} color='white'>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>

                    <GridItem w='100%' h='10'>
                    <Link href={'/'}><Image src={Logo.src} alt={''}  maxWidth="120px"/></Link>
                    </GridItem>

                    <GridItem w='100%' h='10'/>
                    
                    <GridItem w='100%' h='10' align="center">
                    {account ? (
                      <Button colorScheme='gray' textColor={"black"} 
                     mr={['-5%','-10%','-30%','-50%','-60%']} 
                      onClick={disconnect}>Disconnect</Button>
                        ):
                        (
                          <Button colorScheme='gray' textColor={"black"}
                           mr={['-5%','-10%','-30%','-50%','-60%']} 
                      onClick={connectWallet}>Connect your wallet</Button>
                        )}

                    </GridItem>
                </Grid>
            </Box>
         
</Flex>


       <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Welcome to Nexis! <br />
            <Text as={'span'} color={'#278bff'}>
             A decentralized space for creators and their audience!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by receiveing claps and donations from your most loyal readers and reward
            their loyalty with special NFTS. 
          </Text>
        </Stack>
      </Container>



     <Flex  bg="#278bff">
<Container maxW={'100%'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'} color='white'>
            Discover Netsy Choices<br />
          </Heading>
          <Text color='white'>A currated list of our best creators</Text>
        
<br/>
    <Center>
    <Grid color='white' templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']} gap={6} w='75%' mb='6px'>

    {avatars && avatars.map(project => (
       <div key={project._id} >
       <GridItem w='100%' h='10' align='center' mb='150px'>
    <Box maxW='sm'  alignContent={'center'} color="white" bg='#131313' borderRadius={'10px'} p={'2px'}>
        <Stack direction='row' alignItems='center'>
            <Avatar mt='5%' ml='2%' src={project.photoUrl} />
   </Stack>
    
    <Stack direction='column' ml='4%' mb='5%' mt='5%'>  
        <Text align='left' fontSize={'14px'}><b>Username: </b>{project.name}</Text>
        <Text align='left' fontSize={'14px'}><b>Total Claps: </b>{project.enemies}</Text>
        <Stack direction='row' ml='2%' mb='5%' mt='5%'>
        <Button
              variant={'solid'}
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              color='white'
              w='50%'
              size={'sm'}
              mr={1}
              _hover={{ bg: 'white',
              color:'black'}}>
              <Link href={'/channels/' + project._id} key={project._id}>
              View Channel
              </Link>
            </Button>
            </Stack>
            </Stack>
            

    </Box>
    </GridItem>
       </div>
   ))}

    </Grid>
    
   </Center>
   <Center>
   <Text color='white'>In order to be able to register as a creator or to unlock the full potential of this DAPP, please connect your wallet.</Text></Center><Center>
   <Button colorScheme='gray' textColor={"black"} maxW="50%" mt='-20px'>Connect your wallet</Button>
   </Center>   
        </Stack>
        
      </Container>
      </Flex>
      

     <Flex align='bottom'>
    <Box bg='#1f1f1f' w='100%' p={4} color='white'>
      <Center>
      <Text>DAPP created by <Link href="https://twitter.com/polthedev" isExternal><b>@PolTheDev</b></Link></Text>
      </Center>
    </Box>
    </Flex>
   </>
  )
}

export async function getStaticProps() {
const avatars = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
.then(r => r.json());
return {
    props: {avatars}
  }
}
