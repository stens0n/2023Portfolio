import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';

const Home = () => {
  const  [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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
              <Link to='work' class='text-white group border-2 px-6 py-3 my-2 w-1/12 min-w-min flex items-center hover:bg-yellow-600 '
               onClick={handleClick} smooth={true} duration={500} >
              View Work
              <span class="group-hover:rotate-90 duration-300"></span>
              <HiArrowNarrowRight class="group-hover:rotate-90 duration-300 ml-3 min-w-min "/>
              </Link>
              <a href="work">
              </a>
            </div>
        </div>
    </div>
  )
}

export default Home