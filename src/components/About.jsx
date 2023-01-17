import React from 'react';

const About = () => {
  return (
    <div name='about' class="w-full h-screen bg-[#0a192f] text-gray-300" >
        <div class="flex flex-col justify-center items-center w-full h-full" >
            <div class="max-w-[1000px] w-full grid grid-cols-2 gap-8" >
                <div class="sm:text-right pb-8 pl-4" >
                    <p class="text-4xl font-bold inline border-b-4 border-yellow-500" >About</p>
                </div>
                <div></div>
                </div>
                <div class="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4" >
                    <div class=" sm:text-right text-4xl font-bold">
                        <p>Anthony's Career Mission Statement</p>
                    </div>
                    <div>
                        <p> I am passionate about utilizing my skills to design and develop 
                            cutting-edge solutions that improve the lives and experiences of individuals and communities. 
                            My expertise lies in delivering high-quality software that caters to the unique needs of a diverse clientele, 
                            including individual entrepreneurs, small businesses, and large-scale enterprise corporations. With my proficiency 
                            in React, I am committed to creating user-centric solutions that bring about meaningful and measurable enhancements 
                            for the end-users. My ultimate goal is to utilize my expertise to make a positive impact on the world through technology.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About