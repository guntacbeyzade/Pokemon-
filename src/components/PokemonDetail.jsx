import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap'

const PokemonDetail = () => {


    const { id } = useParams();

    const [pokemon, setPokemon] = useState();

    useEffect(() => {

        getPokemonDetail();

    }, [])

    const getPokemonDetail = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data)
        setPokemon(res.data)
    }



    return (

        <div className=' d-flex  align-items-center justify-content-center mt-5' style={{gap : "8rem"}}>
            <div className='border rounded p-5 '>
              <img className='img-rounded' style={{height : "300px"}} src={`${pokemon?.sprites.front_default}`} alt="" />
            </div>
            <div className='border rounded p-5'>
             <h1>{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</h1> 
            </div>
        </div>

    )
}

export default PokemonDetail