import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const context=createContext();

function ContextProvider({children}) {

    const [data,setData]=useState();
    const [search,setSearch]=useState();


    async function fetchData(){
        axios.get(process.env.REACT_APP_API).then((res)=>{
            console.log(res.data.pairs);
            const sorted=res.data.pairs.sort((a,b)=>{
                return b.priceUsd - a.priceUsd;
            })
            setData(sorted);
        }).catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchData();
    },[])


  return (
    <context.Provider value={{data,setData,search,setSearch}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider