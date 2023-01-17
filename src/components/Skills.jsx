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
    <div name="skills" class="bg-[#0a192f]" >
        {/* Container */}
        <div>
            <div>
                <p>Experience</p>
                <p>Technologies I've worked with</p>
            </div>

            <div>
                <div>
                    <img src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills