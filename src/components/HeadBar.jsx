import { SearchIcon } from '@chakra-ui/icons'
import { Button, Flex, HStack, Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { context } from '../ContextProvider'
import WalletConnectComponent from './ConnectBtn';

function HeadBar() {

    const {setSearch,data}=useContext(context);


    function searchFunction(e){
        const new_data=[...data];
        const search=new_data.filter((el,i)=>{
            if(e.target.value.toLowerCase() == el.baseToken.name.toLowerCase()){
                return true;
            }
        });
        // console.log(search)

        setSearch(search.length<=0 ? null : search);
    }


  return (
    <HStack justifyContent={'space-between'} p={'20px'}>
                <Flex alignItems={'center'} width={'435px'} height={'50px'}  border={'1px solid white'} borderRadius={'20px'} textColor={'white'} p={'10px'}>
                <Input onChange={searchFunction} type='text' focusBorderColor='transparent' fontWeight={'600'} boxShadow={'none'} border={'none'} placeholder='Base Token Name Search'/>
                <SearchIcon/>
                </Flex>
                <WalletConnectComponent/>
    </HStack>
  )
}

export default HeadBar