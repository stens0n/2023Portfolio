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
import Python from '../assets/Python.png';

const Skills = () => {
  return (
    <div name="skills" class="bg-[#0a192f] text-gray-300 " >
        {/* Container */}
        <div class="max-w-[1000px] max-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p class="text-4xl font-bold inline border-b-4 border-yellow-500" >Experience</p>
                <p class="py-4" >// Technologies I've worked with</p>
            </div>

            <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8" >
                <div>
                    <img class="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills