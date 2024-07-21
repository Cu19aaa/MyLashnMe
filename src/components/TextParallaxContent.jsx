import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {motion, useInView, useAnimation, useScroll, useTransform} from "framer-motion";
import services from "../assets/Extension.png";
import service2 from "../assets/Collection.png";
import gallery from "../assets/gallery.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import training from "../assets/TrainingCourse.png";
import ClientCam from "../assets/ClientCam.png";
import testimonials from "../assets/Testimonials.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';




const TextParallaxContentExample = () => {
  return (
    <div name="services" className="bg-white">
      
      <TextParallaxContent
        imgUrl={services}
        subheading="Our Services"
        heading="Lash Extension | Strip Lashes | Lash Training Course"
      >
        <ExampleContent2 />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={ClientCam}
        heading="POV: MLNM Clients"
      >
        <ExampleContent3 />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={testimonials}
        heading="The MLNM Experience: Live Testimonials"
      >
        <ExampleContent4 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy subheading={subheading} heading={heading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "contain", // Change to "contain" to show the entire image
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-neutral-950/70"
      />
    </motion.div>
  );
};


const OverlayCopy = ({ heading, subheading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  return (
    <motion.div
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      {subheading && <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>}
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};
 
 const ExampleContent2 = () => (
  <div  className='max-w-[1240px] mx-auto flex flex-col gap-2 mt-10 mb-24'>
    {/* Section 1: Lash Extensions */}
    <div className="w-full md:h-[400px] flex flex-col md:flex-row border rounded-xl mb-8 ">
      {/* Left side for text */}
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] shadow-xl flex flex-col rounded-lg ml-0">
        <h2 className="text-2xl font-bold text-center py-8">Lash Extensions</h2>
        <p className="py-2 border-b mx-8 text-center">Classic</p>
        <p className="py-2 border-b mx-8 text-center">Hybrid and Russian Volume Lash Extension</p>
        <p className="py-2 border-b mx-8 text-center">The Ultimate Service for the Ultimate Lash Lover!</p>
        <p className="py-2 border-b mx-8 text-center">3-5 weeks of retention guaranteed! (T&Cs Apply)</p>
        <button className="bg-[#FBEEEA] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200">
          <a href="https://app.acuityscheduling.com/schedule.php?owner=21251692" target="_blank" rel="noopener noreferrer" className="text-black block w-full h-full">Book Now</a>
        </button>
      </div>
      {/* Right side for image */}
      <div className="w-full md:w-[40%] lg:w-[50%] xl:w-[60%] flex items-center justify-center p-4">
        <img src={services} alt="Lash Extensions" className="max-w-full max-h-full" />
      </div>
    </div>

   {/* Section 2: Strip Lashes */}
<div className="w-full md:h-[600px] flex flex-col md:flex-row rounded-xl mb-8 border">
  {/* Right side for image */}
  <div className="w-full md:w-[40%] lg:w-[50%] xl:w-[60%] flex items-center justify-center p-4">
    <img src={service2} alt="Strip Lashes" className="max-w-full max-h-full" />
  </div>
  {/* Left side for text */}
  <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] shadow-xl flex flex-col rounded-lg ml-0">
    <h2 className="text-2xl font-bold text-center py-8">Strip Lashes</h2>
    <p className="text-center text-4xl font-bold">Kustom Kollection</p>
    <p className="text-center text-4xl font-bold">£40/hr</p>
    <div className="text-center font-medium">
      <p className="py-2 border-b mx-8 text-center">Lash Extensions on a Strip!</p>
      <p className="py-2 border-b mx-8 text-center">Our Custom Collection gives you the lash extension look, as a strip (for ease, convenience and long term use).</p>
      <p className="py-2 border-b mx-8 text-center">If you’re an extension babe, it’s perfect for when you need to take a lash break but still look good.</p>
      <p className="py-2 border-b mx-8 text-center">Get your signature lash set ready to wear on the go!</p>
      <p className="py-2 border-b mx-8 text-center">*Drop down for each:* Length: Maximum Length Volume: Light Hybrids, Russian Volume Extra Specifications/ add ons: (short text box)</p>
      
      {/* Button */}
      <div className="text-center mt-4">
      <Link to="/shopping" target="_blank">
            <button name="shopping" className="bg-[#FBEEEA] rounded-md font-medium my-6 mx-auto ml-6 px-6 py-3 hover:scale-105 duration-200 sm:ml-6">
              Learn More
            </button>
          </Link>
      </div>
    </div>
  </div>
</div>


    {/* Section 3: Online Training Course */}
    <div className="w-full md:h-[550px] flex flex-col md:flex-row rounded-xl mb-8 border ">
  {/* Left side for text */}
  <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] shadow-xl flex flex-col rounded-lg p-4">
    <div className="w-full bg-gray-100 flex flex-col p-4 rounded-lg">
      <h2 className="text-2xl font-bold text-center py-4">Lash Training Courses</h2>
      <p className="text-center text-4xl font-bold py-4">£100</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 text-center">All Inclusive 3-apart Course</p>
        <p className="py-2 border-b mx-8 text-center">Classic Individual Extensions</p>
        <p className="py-2 border-b mx-8 text-center">Russian Volume & Fanning</p>
        <p className="py-2 border-b mx-8 text-center">Isolation and Application Technique</p>
        <p className="py-2 border-b mx-8 text-center">Lash Mapping and Custom Styling</p>
        <p className="py-2 border-b mx-8 text-center">Start Up Business Tips & Tricks</p>
        {/* Other paragraph elements */}
      </div>
      <Link to="/shopping" target="_blank">
            <button name="shopping" className="bg-[#FBEEEA] rounded-md font-medium my-6 mx-auto ml-12 px-6 py-3 hover:scale-105 duration-200 sm:ml-36">
              Sign up Now
            </button>
          </Link>
    </div>
  </div>
  {/* Right side for image */}
  <div className="w-full md:w-[40%] lg:w-[50%] xl:w-[60%] flex items-center justify-center p-4">
    <img src={training} alt="Online Training Course" className="max-w-full max-h-full" />
  </div>
</div>


  </div>
);



const TestimonialData = [
  {
    id:1,
        name:"Client Name",
        text: "lorenm ipsum random good working s in Jesus Name. Success be it",
        img:services,
  },
  {
    id:2,
        name:"Client Name",
        text: "lorem ipsum random good working s in Jesus Name. Success be it",
        img:services,
  },
  {
    id:3,
        name:"Client Name",
        text: "lorem ipsum random good working s in Jesus Name. Success be it",
        img:services,
  },
  {
    id:4,
        name:"Client Name",
        text: "lorem ipsum random good working s in Jesus Name. Success be it",
        img:services,
  },
  {
    id:5,
        name:"Client Name",
        text: "lorem ipsum random good working s in Jesus Name. Success be it",
        img:services,
  },
  {
    id:6,
        name:"Client Name",
        text: "lorem ipsum random good working s in Jesus Name. Success be it",
        img:services,
  },
];


 const ExampleContent3 = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
 
   const controls = useAnimation();
 
   useEffect(() => {
     if (isInView) {
       controls.start('visible');
     }
   }, [isInView, controls]);
 
   return (
     <div ref={ref} name='work' className="w-full h-full text-black bg-white">
       <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full">
         <motion.div
           variants={{
             hidden: { opacity: 0, x: -100 },
             visible: { opacity: 1, x: 0 },
           }}
           initial="hidden"
           animate={controls}
           transition={{ duration: 2.0 }}
           className="pb-8"
         >
            <h1 className='text-center text-6xl font-bold pt-20 pb-20'>Glam Cam</h1>

         </motion.div>
 
         <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
           {/* Grid Item 1 */}
           <motion.div
             style={{ backgroundImage: `url(${client1})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>
 
           {/* Grid Item 2 */}
           <motion.div
             style={{ backgroundImage: `url(${client2})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>

           {/* Grid Item 3 */}
           <motion.div
             style={{ backgroundImage: `url(${client3})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>

           {/* Grid Item 4 */}
           <motion.div
             style={{ backgroundImage: `url(${client4})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>

           {/* Grid Item 5 */}
           <motion.div
             style={{ backgroundImage: `url(${client5})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>

           {/* Grid Item 6 */}
           <motion.div
             style={{ backgroundImage: `url(${client6})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>
         </div>
 
         <div className="flex justify-center mt-8 pt-20 pb-20">
  <Link to="/gallery" target="_blank" rel="noopener noreferrer">
    <button className="text-center rounded-lg px-6 py-3 bg-[#FEF1E8] hover:bg-[#EDDED4] text-black font-bold text-lg">
      View More
    </button>
  </Link>
</div>
       </div>
     </div>
   );
 };

 const ExampleContent4 = () => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  var settings = {
    dots:true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    SlidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                SlidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 2,
                SlidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                SlidesToScroll: 1,
            },
        },
    ],
};

const TestimonialData = [
  {
    id: 1,
    img: 'path/to/image1.jpg', // Replace with actual image path
    text: "Absolutely in love with my lashes! The attention to detail and care taken during my appointment was top-notch. I felt comfortable and relaxed the entire time. Can't wait for my next appointment! 💖",
    name: "Aaliyah M"
  },
  {
    id: 2,
    img: 'path/to/image2.jpg', // Replace with actual image path
    text: "Best lash experience I've ever had! The studio is so chic and welcoming. She listened to exactly what I wanted and my lashes look so natural yet glamorous. 10/10 recommend to all my girls!",
    name: "Chantelle B"
  },
  {
    id: 3,
    img: 'path/to/image3.jpg', // Replace with actual image path
    text: "From start to finish, my appointment was flawless. The technician is so skilled and really knows her stuff. My lashes have never looked better. I'm definitely coming back for more!",
    name: "Sasha P"
  },
  {
    id: 4,
    img: 'path/to/image4.jpg', // Replace with actual image path
    text: "MLNM London’s strip lashes are a lifesaver! They look just like extensions but are so much easier to apply and maintain. Perfect for when I need a break from extensions but still want to look glam.",
    name: "Tiana K"
  },
  {
    id: 5,
    img: 'path/to/image5.jpg', // Replace with actual image path
    text: "The lash extensions I got at MLNM London are the best I’ve ever had. They look natural, feel light, and last for weeks. The team is professional and friendly, making the whole experience enjoyable.",
    name: "Natasha"
  }, 
  {
    id: 6,
    img: 'path/to/image5.jpg', // Replace with actual image path
    text: "Such a professional and friendly service! My lashes are absolutely stunning, and I've gotten so many compliments. If you're looking for the best lash tech in town, look no further!",
    name: "Precious"
  }, 
  {
    id: 7,
    img: 'path/to/image5.jpg', // Replace with actual image path
    text: "Had the most amazing lash appointment today. The atmosphere was so relaxing and the results are incredible. My lashes look full and beautiful without feeling heavy. Thank you so much!",
    name: "Leila S."
  }, 
  {
    id: 8,
    img: 'path/to/image5.jpg', // Replace with actual image path
    text: "I've tried a few places, but this one is hands down the best. My lashes are exactly how I envisioned them. The technician is a true artist, and I'm so happy with my look. Will be back for sure!",
    name: "Zara J."
  }, 
  {
    id: 9,
    img: 'path/to/image5.jpg', // Replace with actual image path
    text: "Love, love, love my new lashes! The service was impeccable and the technician was so lovely and attentive. My lashes look fabulous and I'm feeling extra confident. Highly recommend!",
    name: "Renee A."
  }, 
];

  return (
    <div ref={inViewRef} className="py-10 mb-10 flex justify-center items-center">
      <div className="container">
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 className="text-3xl font-bold">
              Testimonials
            </h1>

            <p className="text-l text-black">
              Here is what some of my clients have had to say
            </p>
          </div>

          {/* Testimonnial Cards */}
          <div className='text-center'>
                <Slider {...settings}>{
                    TestimonialData.map((data) => (
                        <div className='my-6'>
                        <div
                        key={data.id}
                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-black bg-black/10 relative'
                        >
                            <div className='mb-4'>
                                <img src={data.img} alt="" 
                                className='rounded-full w-20 h-20'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                    <p className='text-xs text-white'>{data.text}</p>
                                    <h1 className='text-xl font-bold text-orange-400 dark:text-light'>{data.name}</h1>
                                </div>
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                        </div>
                        </div>
                    ) )
                }
                </Slider>


            </div>
      </div>
      
    </div>
  );
};

 

 
export default TextParallaxContentExample;


{/*"const TextParallaxContentExample = () => {
    return (
        <div className="bg-white">
            <TextParallaxContent 
                imgUrl={services}
                subheading="Our Services"
                heading="Lash Extension | Strip Lashes | Lash Training Course"
            >
               <ExampleContent2/>
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl={gallery}
                heading="POV: MLNM Clients"

            >
               <ExampleContent3/>
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl={testimonials}
                heading="The MLNM Experience: live Testimonials"
            >
               <ExampleContent4/>
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
        style={{
         paddingLeft: IMG_PADDING,
         paddingRight: IMG_PADDING,
        }}
        >
            <div className="relative h-[150vh]">
               <StickyImage imgUrl={imgUrl}/>
               <OverlayCopy subheading={subheading} heading={heading}/>   
                
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({imgUrl}) => {
   const targetRef = useRef(null);
      const {scrollYProgress} = useScroll ({
         target: targetRef,
         offset: ["end end", "end start"]
      });

      const scale = useTransform(scrollYProgress, [0,1], [1,0.85]);
      const opacity = useTransform(scrollYProgress, [0,1], [1,0]);

   return (
      <motion.div
      style={{
         backgroundImage: url(${imgUrl}),
         backgroundSize: "cover",
         backgroundPosition: "center",
         height: calc(100vh - ${IMG_PADDING * 2}px),
         top: IMG_PADDING,
         scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl">
         <motion.div 
         style={{opacity,
         }}

         className="absolute inset-0 bg-neutral-950/70"
         />
      </motion.div>
   )
};

const OverlayCopy = ({heading, subheading}) => {
   const targetRef = useRef(null);
      const {scrollYProgress} = useScroll ({
         target: targetRef,
         offset: ["start end", "end start"]
      });
      

   return <motion.div
   ref={targetRef}
        name='services' className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
   
   >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>

      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>

   </motion.div>
}"*/}