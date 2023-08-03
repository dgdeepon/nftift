import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, HStack, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import bgImage from '../images/Rectangle 9398.png'
import HeadBar from './HeadBar'
import LeftBar from './LeftBar'
import Footer from './Footer'
import DataCard from './DataCard'



function MainScreen() {

    
  return (
    <Box>

    <Grid gridTemplateColumns={'15% 85%'}>
        <Box  textAlign={'left'} borderTopRightRadius={'50px'}  bgColor={'#292929'}>
            <LeftBar/>
        </Box>
        <Box overflow={'auto'}>
            <Box height={'95vh'}>
            <HeadBar/>
            {/* search results will be here */}
            <Heading textAlign={'left'} color={'white'} p={'50px'}>Base Token Name Search Result</Heading>
        <DataCard/>

            </Box>
        </Box>
    </Grid>
    <Footer/>
    </Box>
  )
}

export default MainScreen