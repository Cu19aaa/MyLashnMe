import React, { useState, useEffect } from 'react';
import mylash1 from '../assets/Hero1.png';
import mylash2 from '../assets/Hero2.png';
import mylash3 from '../assets/Hero3.png';
import mylash4 from '../assets/dash1.png';
import mylash5 from '../assets/dash2.png';
import mylash6 from '../assets/dash3.png';

const Hero = () => {
    const [backgroundImages, setBackgroundImages] = useState([mylash1, mylash2, mylash3]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to switch to the next image in the carousel
    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % backgroundImages.length);
    };

    // Use useEffect to update background images based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Use smaller screen images
                setBackgroundImages([mylash4, mylash5, mylash6]);
            } else {
                // Use larger screen images
                setBackgroundImages([mylash1, mylash2, mylash3]);
            }
        };

        // Call handleResize on initial load and add a resize event listener
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Use useEffect to set up an interval that switches images
    useEffect(() => {
        const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [currentImageIndex]);

    return (
        <div name='home' className='w-full h-screen relative'>
            {/* Background image carousel */}
            {backgroundImages.map((image, index) => (
                <img
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    src={image}
                    alt={`Background ${index}`}
                    style={{ transition: 'opacity 2s ease-in-out' }}
                />
            ))}

            {/* Overlay */}
            <div className='bg-black/20 absolute top-0 left-0 w-full h-full' />

            {/* Text and button overlay */}
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white px-4 md:px-10'>
                {/* You can add your text here */}
            </div>
        </div>
    );
};

export default Hero;
