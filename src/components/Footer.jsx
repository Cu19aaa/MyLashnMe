import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'


const Footer = () => {
  return (
    <div className='w-full mt-24 bg-black text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        
        <div className='col-span-2 py-8 md:pt-2'>
            <p className='font-bold uppercase'>Join my Mailing List</p>
            <p className='py-4'>To get latest updates on class discounts</p>
            <form  method='POST' action="https://getform.io/f/oeEJ3va0"
            className='flex flex-col sm:flex-row'>
                <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter Email'/>
                <button className=' text-white border-2 border-white hover:bg-orange-600 hover:border-black hover:text-black hover:border-grey-600 p-2 mb-4 rounded-md'>Subscribe</button>
                {/*<button className='rounded-lg text-black border-2 border-black hover:bg-black hover:text-white hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate</button>*/}

            </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>MyLashnMe, LLC. All Right Reserved. Developed by David Devs.</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <a href=""> <FaFacebook /> </a>
            <a href="https://www.instagram.com/mylashnme/" target="_blank"> <FaInstagram/> </a>
            <a href=""> <FaTwitter/> </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
