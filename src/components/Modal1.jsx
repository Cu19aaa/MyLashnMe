import React from 'react';
import { motion } from 'framer-motion';

const Modal1 = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-4 max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Modal1;
