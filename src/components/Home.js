import React from "react";
import image from "../travel.jpg";


export default function Home(){
  return (
    <main>
      <img src={image} alt="a yellow camping truck is on the road" className='absolute object-cover w-full h-full'/>
        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
          <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name text-yellow-300 text-shadow-sm text-shadow-black'>Aloha! I'm Mimi.</h1>
        </section>

    </main>
  )
}