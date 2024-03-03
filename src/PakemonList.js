import React from 'react'

export default function PakemonList({pokemon}) {
  return (
    <div>
    {pokemon.map((e,i)=>(
        <div key= {e }><span>{i}</span>{" " + e}</div>
    ))}
    </div>
  )
}
