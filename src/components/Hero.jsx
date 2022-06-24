import React from 'react'
import HeroImg from '../assets/images/image 2.png'

export default function Hero() {
  return (
    <main>
      <div className="hero">
        <img src={HeroImg} alt="" className="hero"/>
      </div>
    </main>
  )
}
