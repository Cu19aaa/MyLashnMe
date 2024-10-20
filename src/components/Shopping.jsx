import React, { useState } from 'react';
import Modal1 from './Modal1'; // Import the new Modal1 component
import item1Img from '../assets/Extension.png'; // Import item images
import item2Img from '../assets/Collection.png';
import item3Img from '../assets/Sugar.png';
import item4Img from '../assets/servicespic.png';

const Shopping = () => {
  const [items] = useState([
    { id: 1, name: 'Me X Cléopâtre', price: 40, description: 'The ultimate strip-cat eye look. This set includes fluff & optional spikes. Subtle eye lift effect with a gradual short to long transition.', image: item1Img, stripeLink: 'https://buy.stripe.com/test_cN29Ct3597Gs7EkeUV' },
    { id: 2, name: 'Me X Savauge', price: 40, description: 'A sweet but savage strip lash look. A.K.A ‘Subtle Choppy Russians', image: item2Img, stripeLink: 'https://buy.stripe.com/test_6oE01T7lpf8U1fWeUW' },
    { id: 3, name: 'Me X Sugarr ', price: 40, description: 'A simple doll-eyed glam look. For when you want your lashes to be seen but not obvious', image: item3Img, stripeLink: 'https://buy.stripe.com/test_5kAbKB0X1bWI2k04gj' },
    { id: 4, name: 'Me X Wispay', price: 40, description: 'Our signature strip lash look, with both wisp & spikes.', image: item4Img, stripeLink: 'https://buy.stripe.com/test_14k7ul9tx6Co2k04gk' }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemId) => {
    const selectedItem = items.find(item => item.id === itemId);
    setSelectedItem(selectedItem);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-full min-h-screen container mx-auto relative pt-16">
      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">Shopping Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-gray-200 hover:bg-gray-300 p-4 rounded-md transition duration-200 text-center cursor-pointer"
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-lg font-medium mb-4">£{item.price}</p>
            <button className="bg-[#E6C2BF] hover:bg-[#EDDED4] text-white font-bold py-2 px-4 rounded-md">
              Learn More
            </button>
            <a href={item.stripeLink} className="block mt-2 bg-[#E6C2BF] hover:bg-[#EDDED4] text-white font-bold py-2 px-4 rounded-md">
              Buy It Now
            </a>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal1 isOpen={true} onClose={closeModal}>
          <div className="flex flex-col md:flex-row items-center justify-center p-4">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-96 object-cover" />
            </div>
            <div className="md:w-1/2 md:pl-4">
              <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
              <p className="text-xl font-medium mb-2">£{selectedItem.price}</p>
              <p className="text-lg mb-4">{selectedItem.description}</p>
              <a href={selectedItem.stripeLink} className="bg-[#FEF1E8] hover:bg-[#EDDED4] text-black font-bold py-2 px-4 rounded-md">
                Buy It Now
              </a>
              <button
                className="bg-[#FEF1E8] hover:bg-[#EDDED4] text-black font-bold py-2 px-4 rounded-md mt-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal1>
      )}
    </div>
  );
};

export default Shopping;
