import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionAndValues = () => {
  const [refVision, inViewVision] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [refValues, inViewValues] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div name='about' className='h-full m-auto py-16 px-16 pt-20'>
      <div>
        <motion.h3
          ref={refVision}
          className='text-5xl md:text-6xl font-bold text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inViewVision ? 1 : 0, y: inViewVision ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }} // Adjusted duration and delay
        >
          What Drives Us
        </motion.h3>
      </div>

      <div name='about' className='max-w-[1400px] h-full m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left Side */}
        <motion.div
          ref={refVision}
          className='flex flex-col h-full justify-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inViewVision ? 1 : 0, y: inViewVision ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.8 }} // Adjusted duration and delay
        >
          <motion.h3
            className='text-5xl md:text-6xl font-bold text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: inViewVision ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }} // Adjusted duration and delay
          >
            Our Vision
          </motion.h3>
          <motion.p
            className='pb-6 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: inViewVision ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.2 }} // Adjusted duration and delay
          >
            To be embody Everything Lashes, the place where anything pertaining to lashes, you’ll find here. Personal approach with supplying products and services customised and tailored to unique individuals.
          </motion.p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          ref={refValues}
          className='flex flex-col h-full justify-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inViewValues ? 1 : 0, y: inViewValues ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }} // Adjusted duration and delay
        >
          <motion.h3
            className='text-5xl md:text-6xl font-bold text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: inViewValues ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.8 }} // Adjusted duration and delay
          >
            Our Values
          </motion.h3>
          <motion.p
            className='pb-6 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: inViewValues ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }} // Adjusted duration and delay
          >
            Unique, all inclusive products, exclusive to MyLashnme
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionAndValues;
