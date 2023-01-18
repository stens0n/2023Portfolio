import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/pyLogo.png';

const Skills = () => {
  return (
    <div name="skills" class="w-full h-screen bg-[#0a192f] text-gray-300 " >
        {/* Container */}
        <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p class="text-4xl font-bold inline border-b-4 border-yellow-500" >Skills</p>
                <p class="py-4" >// Technologies I've worked with</p>
            </div>

            <div class="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8" >
                <div class="shadow-md shadow-[#040c16] hover:scale-100 duration-500" >
                    <img class="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p class="my-4">HTML</p>
                </div>
                <div class="shadow-md shadow-[#040c16] hover:scale-100 duration-500" >
                    <img class="w-20 mx-auto" src={CSS} alt="CSS icon" />
                    <p class="my-4">CSS</p>
                </div>
                <div class="shadow-md shadow-[#040c16] hover:scale-100 duration-500" >
                    <img class="w-20 mx-auto" src={Tailwind} alt="Tail icon" />
                    <p class="my-4">Tailwind</p>
                </div>
                <div class="shadow-md shadow-[#040c16] hover:scale-100 duration-500" >
                    <img class="w-20 mx-auto" src={JavaScript} alt="JS icon" />
                    <p class="my-4">JavaScript</p>
                </div>
                <div class="shadow-md shadow-[#040c16] hover:scale-100 duration-500" >
                    <img class="w-20 mx-auto" src={ReactImg} alt="React icon" />
                    <p class="my-4">React</p>
                </div>
                <div class="shadow-md shadow-[#040c16] hover:scale-100 duration-500" >
                    <img class="w-20 mx-auto" src={Python} alt="Py icon" />
                    <p class="my-4">Python</p>
                </div>
                <div class="shadow-md shadow-[#040c16] hover:scale-100 duration-500" >
                    <img class="w-20 mx-auto" src={GitHub} alt="HTML icon" />
                    <p class="my-4">Github</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills