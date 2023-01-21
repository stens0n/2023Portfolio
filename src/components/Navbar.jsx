import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/2-4.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const  [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div class='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{width: '311px'}} />
      </div>

      {/* menu */}
        <ul class='hidden md:flex' >
          <li>
            <Link to="home" smooth={true} duration={500} >
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} >
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} >
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} >
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} >
              Contact
            </Link>
          </li>
        </ul>
      

      {/* Hamburger */}
      <div onClick={handleClick} class='md:hidden z-10'>
        { !nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul class={!nav ? 'hidden' 
      : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      } 
      >
          <li class='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500} >
              Home
            </Link>
          </li>
          <li class='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} >
              About
            </Link>
          </li>
          <li class='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
              Skills
            </Link>
          </li>
          <li class='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500} >
              Work
            </Link>
          </li>
          <li class='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
              Contact
            </Link>
          </li>
      </ul>

      {/* Social Icons - Social Media sucks */}
      <div class="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li class="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a class="flex justify-between items-center w-full text-gray-300" 
               href='https://www.linkedin.com/in/anthony-stenson-b33472217/' >
              LinkedIn <FaLinkedin size={ 30 } />
            </a>
          </li>
          <li class="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a class="flex justify-between items-center w-full text-gray-300" 
               href='https://github.com/stens0n' >
              Github <FaGithub size={ 30 } />
            </a>
          </li>
          <li class="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900">
            <a class="flex justify-between items-center w-full text-gray-300" 
               href='mailto:asten010@gmail.com' >
              Email <HiOutlineMail size={ 30 } />
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar