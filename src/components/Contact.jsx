import React from 'react'

const Contact = () => {
  return (
    <div name='contact' class="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4" >
        <form method='POST' action="https://getform.io/f/8d7e2e26-4166-4255-9cbd-1ef30cf1ca74" class='flex flex-col max-w-[600px] w-full'>
          <div class="pb-8">
            <p class="text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300">Contact</p>
            <p class="text-gray-300 py-4">// Submit the form below to contact </p>
          </div>
          <input class='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
          <input class="my-4 p-2 bg-[#ccd6f6]" type='email' placeholder='Email' name='email' />
          <textarea class="bg-[#ccd6f6] p-2" name='message' rows="10" placeholder="Message" ></textarea>
          <button class="text-white border-2 hover:bg-yellow-500 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center" >Send Message</button>
        </form>
    </div>
  )
}

export default Contact