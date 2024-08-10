import React from 'react';
import welcomeImg from '../assets/welcome_0.png'

const Hero = () => {
  return (
    <section className="h-fit text-white flex flex-row items-center justify-around w-full px-72 gap-10 portrait:px-10 portrait:justify-center" style={{ backgroundColor: "#fdebee" }}>
      <div className="text-left portrait:w-full ">
        <h1 className="text-5xl font-bold pb-4 text-transparent bg-clip-text bg-gradient-to-b from-red-400  to-red-600 border border-none">Your Tax and Legal Partner, Befiler</h1>
        <h1 className= "text-4xl text-black font-bold border-none bg-transparent">Going beyond NTN and Income Tax Filing</h1>
        <p className="mt-6 text-black">Befiler now provides 360 solutions to all your Business needs including Business</p>
        <p className = "mb-6 text-black">Incorporation and Trademark Registration in Pakistan and USA.</p>
        <button className="bg-gradient-to-b from-red-400 to-red-600 border border-red-400 hover:from-red-500 hover:to-red-700 text-white font-bold py-2 px-14 rounded-3xl">
          Click to Start Tax-filing
        </button>
      </div>
      <div className = "portrait:hidden">
        <img src = {welcomeImg} className = "contain"/>
      </div>
    </section>
  );
}

export default Hero;
