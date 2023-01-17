import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' class='w-full h-screen bg-[#0a192f]' >
        {/* Container */}
        <div class='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p class='text-yellow-400'>Hi, my name is</p>
            <h1 class="text-4xl sm:text-7xl font-bold text-gray-200">Anthony Stenson</h1>
            <h2 class="text-4xl sm:text-7xl font-bold text-gray-500">I'm a Full Stack Developer</h2>
            <p class="text-gray-400 py-4 max-w-[700px]">
            Specializing in crafting responsive digital experiences that augment conversion rates 
            and foster user engagement through intuitive design.</p>
            <div>
                <button class='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>View Work
                <span class="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight class="ml-3 "/>
                </span> 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home