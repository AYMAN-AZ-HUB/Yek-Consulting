import React from 'react'
import heroImg from '../imgs/IT.jpg'
const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
      <h1 className="text- 6xl text-5xl	 font-semibold font-koulen pb-5">Yek Conseil, votre consultant en ligne </h1>
      <div>
      <h2 className="text-lg md:text-1xl mb-10">Profitez d’une consultation juridique avec des experts en droit en toute simplicité. Ou que vous soyez, <br/>vous pouvez maintenant avoir des réponses à toutes vos questions.  </h2>
      </div>
      <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
            Join Us Now
            </button>
        
        </div>
    </div>    )
    }

    export default Hero