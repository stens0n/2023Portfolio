import React from 'react'
import KyleD from '../assets/projects/KyleDavisPhoto.webp'
import StenBank from '../assets/projects/StensonBank.png'
import CyrptoProject from '../assets/projects/Crypto2.png'

const Work = () => {
  return (
    <div name='work' class="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full" >
            <div class="pb-8">
                <p class="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500" >Work</p>
                <p class="py-6" >// Check out some of my recent work</p>
            </div>

            {/* Container */}

            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4" >

                {/* Grid Item */}

                <div style={{backgroundImage: `url(${StenBank})`}} 
                class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" 
                >
                
                    {/* Hover Effects */}

                    <div class="opacity-0 group-hover:opacity-100" >
                        <span class="text-2xl font-bold text-white tracking-wider" >
                            Bank Concept

                        </span>
                        <div class="pt-8 text-center" >
                            <a href="https://stensonbankreact.netlify.app/">
                                <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Demo</button>
                            </a>
                            <a href="https://github.com/stens0n/parodyBankReact">
                                <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${KyleD})`}} 
                class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" 
                >
                
                    {/* Hover Effects */}

                    <div class="opacity-0 group-hover:opacity-100" >
                        <span class="text-2xl font-bold text-white tracking-wider" >
                            Campaign Website

                        </span>
                        <div class="pt-8 text-center" >
                            <a href="https://kyledavis2022template.netlify.app/">
                                <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Demo</button>
                            </a>
                            <a href="https://github.com/stens0n/CampaignSite">
                                <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${CyrptoProject})`}} 
                class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" 
                >
                
                    {/* Hover Effects */}

                    <div class="opacity-0 group-hover:opacity-100" >
                        <span class="text-2xl font-bold text-white tracking-wider" >
                            Top 20 Crypto

                        </span>
                        <div class="pt-8 text-center" >
                            <a href="https://cryptoapistenson.netlify.app/">
                                <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Demo</button>
                            </a>
                            <a href="https://github.com/stens0n/crypto-app-react-sten">
                                <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work