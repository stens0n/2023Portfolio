import React from 'react'

const Work = () => {
  return (
    <div name='work' class="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full" >
            <div class="pb-8">
                <p class="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500" >Work</p>
                <p class="py-6" >// Check out some of my recent work</p>
            </div>

            <div class="gird sm:grid-cols-2 md:grid-cols-3 gap-4" >
                <div class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                
                    {/* Hover Effects */}
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
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