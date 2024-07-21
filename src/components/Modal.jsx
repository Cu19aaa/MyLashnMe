import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, imgUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg p-4 max-w-[90vw] max-h-[90vh] overflow-auto flex flex-col items-center"
      >
        <button 
          className="absolute top-2 right-2 text-2xl font-bold text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <motion.img 
          src={imgUrl} 
          alt="Gallery Item" 
          className="rounded-lg max-w-full max-h-[80vh] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
