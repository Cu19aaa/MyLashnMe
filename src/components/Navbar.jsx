import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; // Alias as ScrollLink to avoid conflict with React Router Link
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-black text-gray-300 z-50'>
      <div>
        <img src={Logo} alt="logo image" style={{ width: '80px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='mx-4 cursor-pointer'>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className='mx-4 cursor-pointer'>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className='mx-4 cursor-pointer'>
          <ScrollLink to="services" smooth={true} duration={500}>
            Services
          </ScrollLink>
        </li>
        <li className='mx-4 cursor-pointer'>
          <a href="https://app.acuityscheduling.com/schedule.php?owner=21251692" target="_blank" rel="noopener noreferrer">
            Make a Booking
          </a>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to="/shopping" target="_blank">
            Shop 
          </Link>
        </li>
        {/*<li className='mx-4 cursor-pointer'>
          <ScrollLink to="academy" smooth={true} duration={500}>
            The Academy
          </ScrollLink>
        </li>
  */}
        <li className='mx-4 cursor-pointer'>
          <a href="/gallery" target="_blank" rel="noopener noreferrer">
            Gallery
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-[90px] left-0 w-full h-screen bg-[#E5E7EB] flex flex-col justify-center items-center md:hidden'}>
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>

        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to="services" smooth={true} duration={500}>
            Services
          </ScrollLink>
        </li>

        <li className='py-6 text-4xl'>
          <a href="https://app.acuityscheduling.com/schedule.php?owner=21251692" target="_blank" rel="noopener noreferrer">
            Make a Booking
          </a>
        </li>

        <li className='py-6 text-4xl'>
          <Link to="/shopping" target="_blank">
            Shop 
          </Link>
        </li>

        <li className='py-6 text-4xl'>
          <a href="/gallery" target="_blank" rel="noopener noreferrer">
            Glam Cam
          </a>
        </li>
{/*}
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to="terms" smooth={true} duration={500}>
            Terms and Conditions
          </ScrollLink>
        </li>

*/}
    
{/*}

        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to="academy" smooth={true} duration={500}>
            The Academy
          </ScrollLink>
        </li>
*/}

{/*}

        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to="clientcam" smooth={true} duration={500}>
            Client Cam
          </ScrollLink>
        </li>
*/}

      </ul>
    </div>
  );
}

export default Navbar;
