import React from 'react'

const Pokeinfo = ({data}) => {
  return (
    <>
    {
        (!data)?"":(
            <>
             <h1>{data.name}</h1>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />

            </>
        )
    }
   
    </>
  )
}

export default Pokeinfo