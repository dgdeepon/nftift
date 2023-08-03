import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import MainLogo from '../images/Vector.png'
import TokenLogo from '../images/TokenVector.png'
import PairLogo from '../images/fluent_pair-24-filled.png'

function LeftBar() {
  return (
  <Box roundedTopRight={'50px'} textColor={'white'}>
  <Flex alignItems={'center'} p={'20px'} gap={'15px'}>
      <Image width={'25.33px'} height={'29.33px'} src={MainLogo}/>
      <Heading fontFamily={'pacifico'}>NFTify</Heading>
  </Flex>
  <Box>
      <Flex alignItems={'center'} p={'20px'} gap={'15px'} bgColor={'#F30050'} cursor={'pointer'}>
        <Image src={TokenLogo}/>
      <Text as={'b'}>Token Address</Text>
      </Flex>
      <Flex alignItems={'center'} p={'20px'} gap={'15px'} cursor={'pointer'}>
        <Image src={PairLogo}/>
      <Text as={'b'}>Pair Address</Text>
      </Flex>
  </Box>
  </Box>
  )
}

export default LeftBar