import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='logo'>
    <center><img src="Logo -site.png" height="60" width="300"/></center>
    <div className='painel'>
        <Link to="/masculino" className='Link'>
        MASCULINO
        </Link>
      <Link to="/feminino" className='Link'>
        FEMININO
        </Link>
      <Link to="/Infantil" className='Link'>
        INFANTIL
        </Link>
      <Link to="/Calcados" className='Link'>
        CALÇADOS
        </Link> 
    </div>
    </div>
  )
}
