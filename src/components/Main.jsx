import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import { Button } from 'react-bootstrap'

const Main = () => {
    const [pokeData,setPokeData]=useState([])
    const [loading,setLoading]=useState(true)
    const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl,setNextUrl]=useState()
    const [prevUrl,setPrevUrl]=useState()
    const [pokeDex,setPokeDex]=useState()


    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        // console.log(res)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false)
    }
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
           const result=await axios.get(item.url)
        //    console.log(result)
        setPokeData(state=>{
            state=[...state,result.data]
            state.sort((a,b)=>a.id>b.id?1:-1)
            return state;
        })

        })
    }

    useEffect(()=>{
        pokeFun();
    },[url])
  return (
    
    <div className="container">
    <div className="left-content">
        <div className='d-flex justify-content-center'><h1>Pokemon Genarate</h1></div>
        <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
        <div className="d-flex justify-content-around mt-5 mb-5">
            <Button onClick={() => { setPokeData([]) 
                setUrl(prevUrl)}}>Önce</Button>
            <Button onClick={()=>{ setPokeData([]) 
                setUrl(nextUrl)}}>Sonra</Button>
        </div>
    </div>
    <div className="right-content">
        <Pokeinfo data={pokeDex}/>
    </div>
    </div>
    
  )
}

export default Main