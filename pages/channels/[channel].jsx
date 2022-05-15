import React from 'react'


import { 
    Flex, Avatar,
    Center,
    WrapItem, Text, Box,
    AspectRatio, Grid, GridItem, Link, Image,
    Button
    } from '@chakra-ui/react'

    import Logo from "/Images/NETSY-WHITE.png"


    export const getStaticProps = async (context) => {
       const id = context.params.channel
       const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/' + id)
       const data = await res.json()
        return {
            props: {channel: data}
          }
        }

    export async function getStaticPaths() {
        const characters = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
        .then(r => r.json());

        const paths = characters.map(character => {
          return {
            params: {channel: character._id.toString()}
          }
        })

        return {
            paths,
            fallback: false
            
          }

        }


const Channel = ({channel}) => {
  return (<>
<Flex>
            <Box bg='#278bff' w='100%'  p={6} color='white'>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>

                    <GridItem w='100%' h='10'>
                    <Link href={'/'}><Image src={Logo.src} alt={''}  maxWidth="120px"/></Link>
                    </GridItem>

                    <GridItem w='100%' h='10'/>
                    <GridItem w='100%' h='10' align="center">
                    <Button colorScheme='gray' textColor={"black"}>Connect your wallet</Button>
                    </GridItem>
                </Grid>
            </Box>
         
</Flex>


      <Center>
      <Flex>
      <WrapItem>
      <Avatar name='Dan Abrahmov' 
      src={channel.photoUrl} 
       mt='20px' mb='20px' size='xl'
       border='10px' borderColor={'green'}
      />
      </WrapItem>
      </Flex>
      </Center>

      <Center>
      <Text>
          <b>Name:</b> {channel.name}
      </Text>
      </Center>

      <Center>
      <Text>
          <b>Address:</b> {channel._id}
      </Text>
      </Center>

      <Center>
      <Flex maxW={'50%'} mb='20px'>
      <Text as='i'  align='center' noOfLines={10}><b>Description: </b>
      {channel.affiliation}</Text>
      
      </Flex>
      </Center>


      <Center>
          <Box bg="#278bff" 
          w={['50%','50%','40%','30%','20%']} p={3} 
          color='white'
          align="center" mt='5px'
          borderRadius={'7px'} mb='40px'>
              <Text noOfLines={1}>👏🏻 <b>Total Claps:</b> 120</Text>
          </Box>
      </Center>

      <Center>
      <Flex maxW={'100%'} mb='20px'>
      <Text as='u' fontSize='30px'><b>Recent Videos</b>
        </Text>
      </Flex>
      </Center>

      <Center>
      <Box bg='#1f2020' w={['90%','95%','70%','60%','40%']} p={4} color='white' 
      mb='20px' borderRadius='10px' align='center'>
 <Text as='b' mb='10px' fontSize='30px' 
  noOfLines={5}>How I created this Dapp using
  NextJs</Text>
  <Text as='i' mt='40px'>Lorem ipsum is placeholder text commonly used in the graphic, print, and
  publishing industries for previewing layouts and visual mockups.</Text>
  <Center>
  <Grid templateColumns={['repeat(1, 1fr)', 'repeat(6, 1fr)']} gap={2} mt='20px'
  >
  
  <GridItem></GridItem>
  <GridItem></GridItem>

  <GridItem w='200px' h='10' bg='#484949' 
  borderRadius={'20px'}>
    <Text mt='8px'><b>👏🏻  1,245 Claps</b></Text>
  </GridItem>


  <GridItem w='200px' h='10' bg='#484949' borderRadius='20px'>
  <Text mt='8px'><b>💰 14.3 Ethers</b></Text>
  </GridItem></Grid></Center>
  
  <AspectRatio maxW='100%' ratio={16/9} mt='20px'>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/4sSOBISp84M" allowFullScreen></iframe>
</AspectRatio>
</Box>
      </Center>

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

export default Channel