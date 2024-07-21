import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import gallery from "../assets/gallery.png";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";
import gallery12 from "../assets/gallery12.png";
import gallery13 from "../assets/gallery13.png";

const GalleryPage = () => {
  const images = [
    gallery, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7,
    gallery8, gallery9, gallery10, gallery11, gallery12, gallery13,
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div name='gallery' className="w-full min-h-screen text-black bg-white relative z-10">
      <div className="max-w-[1240px] mx-auto p-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2.0 }}
          className="pb-8 text-center"
        >
          <p className="text-4xl font-bold inline border-b-4 text-black border-black">Gallery</p>
          <p className="py-6">A comprehensive collection of our works</p>
          


        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              style={{ backgroundImage: `url(${image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-64 sm:h-96 bg-cover bg-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(image)}
            >
              <div className='opacity-0 group-hover:opacity-100'></div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} imgUrl={selectedImage} />
    </div>
  );
};

export default GalleryPage;
