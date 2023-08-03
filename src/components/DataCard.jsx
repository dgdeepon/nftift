import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { context } from '../ContextProvider';

function DataCard() {

    const {data,search} = useContext(context);


    function cardGeneration(el,name){

        return <Box bgColor={'#390554'}  borderRadius={'10px'} textAlign={'left'} p={'50px'} color={'white'}>
                <Heading>{name}</Heading>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Name</Text>
                <Text>{el.name}</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Symbol</Text>
                <Text> {el.symbol}</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Address</Text>
                <Text>{el.address}</Text>
                </Flex>
            </Box>

    }


  return (
    <Grid gridTemplateColumns={'repeat(4,22%)'} gap={'10px'} p={'5'} m={'auto'}>
        { search ? search?.map((el,i)=>{
            return <>
                <Box bgColor={'#390554'} borderRadius={'10px'} textAlign={'left'} p={'50px'} color={'white'}>
                <Heading>Basic Info</Heading>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Pair created at</Text>
                <Text>{el.pairCreatedAt}</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Dex ID</Text>
                <Text> {el.dexId}</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Pair Address</Text>
                <Text>{el.pairAddress}</Text>
                </Flex>
            </Box>
                {cardGeneration(el.baseToken,'Base Token')}
                {cardGeneration(el.quoteToken, 'Quote Token')}
            <Box bgColor={'#390554'} borderRadius={'10px'} textAlign={'left'} p={'50px'} color={'white'}>
                <Heading>Price</Heading>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Price Native</Text>
                <Text>{el.priceNative}</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Price USD</Text>
                <Text> {el.priceUsd}</Text>
                </Flex>
            </Box>
            </>
        }) : data?.map((el,i)=>{
            return <>
                <Box bgColor={'#390554'} borderRadius={'10px'} textAlign={'left'} p={'50px'} color={'white'}>
                <Heading>Basic Info</Heading>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Pair created at</Text>
                <Text>{el.pairCreatedAt}</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Dex ID</Text>
                <Text> {el.dexId}</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Pair Address</Text>
                <Text>{el.pairAddress}</Text>
                </Flex>
            </Box>
                {cardGeneration(el.baseToken,'Base Token')}
                {cardGeneration(el.quoteToken, 'Quote Token')}
            <Box bgColor={'#390554'} borderRadius={'10px'} textAlign={'left'} p={'50px'} color={'white'}>
                <Heading>Price</Heading>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Price Native</Text>
                <Text>{el.priceNative}</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Price USD</Text>
                <Text> {el.priceUsd}</Text>
                </Flex>
            </Box>
            </>
        })}
    </Grid>
  )
}

export default DataCard