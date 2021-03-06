import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function LandingPage() {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex justify-around items-center bg-gradient-to-b from-Medium__Champagne h-screen sm:flex-col md:flex-row md:content-around flex-col">
        <div className="flex flex-col items-center max-w-3/4 mt-8">
          <img
            src="https://cdn.discordapp.com/attachments/868284643886120985/872487887319474236/1.png?width=1025&height=210"
            width="500"
            alt="Imagen"
          />
          <span className="text-2xl font-medium">
            {' '}
            Generando Oportunidades{' '}
          </span>
          <Link to="/home" className="m-5 ">
            <button className="transition duration-500 ease-in-out px-10 py-2 focus:outline-none transform hover:-translate-y-1 hover:scale-110 rounded-full text-white  bg-Viridian__Green font-bold hover:bg-Blue__Shappire ">
              Home
            </button>
          </Link>
        </div>
        <img
          className="rounded-full max-w-3/4"
          src="https://ganemospalencia.com/wp-content/uploads/2020/03/trabajadores-profesionales-dibujos-animados-dia-trabajo_18591-56729.jpg"
          width="450"
          alt="Imagen"
        />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
