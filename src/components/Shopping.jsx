import React, { useState } from 'react';
import Modal1 from './Modal1'; // Import the new Modal1 component
import item1Img from '../assets/Extension.png'; // Import item images
import item2Img from '../assets/Collection.png';
import item3Img from '../assets/Sugar.png';
import item4Img from '../assets/servicespic.png';
import { FaShoppingCart } from 'react-icons/fa'; // Import FontAwesome icon for cart

const Shopping = () => {
  // Define your items data (you can fetch this from an API or define statically)
  const [items] = useState([
    { id: 1, name: 'Me X Cléopâtre', price: 40, description: 'The ultimate strip-cat eye look. This set includes fluff & optional spikes. Subtle eye lift effect with a gradual short to long transition.', image: item1Img },
    { id: 2, name: 'Me X Savauge', price: 40, description: 'A sweet but savage strip lash look. A.K.A ‘Subtle Choppy Russians', image: item2Img },
    { id: 3, name: 'Me X Sugarr ', price: 40, description: 'A simple doll-eyed glam look. For when you want your lashes to be seen but not obvious ', image: item3Img },
    { id: 4, name: 'Me X Wispay', price: 40, description: 'Our signature strip lash look, with both wisp & spikes.', image: item4Img }
  ]);

  // State to manage which item's details are currently displayed
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to handle click on an item and open modal
  const handleItemClick = (itemId) => {
    const selectedItem = items.find(item => item.id === itemId);
    setSelectedItem(selectedItem);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    closeModal();
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Function to handle checkout
  const handleCheckout = () => {
    // Here you would typically integrate with Stripe Checkout or other payment gateways
    alert('Proceed to checkout');
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="w-full min-h-screen container mx-auto relative pt-16"> {/* Adjusted padding-top to ensure it appears below navbar */}
      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">Shopping Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Display each item */}
        {items.map(item => (
          <div
            key={item.id}
            className="bg-gray-200 hover:bg-gray-300 p-4 rounded-md transition duration-200 text-center cursor-pointer"
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-lg font-medium mb-4">£{item.price}</p> {/* Updated currency symbol */}
            <button
              className="bg-[#FEF1E8] hover:bg-[#EDDED4] text-white font-bold py-2 px-4 rounded-md"
            >
              Learn More
            </button>
          </div>
        ))}

        {/* Open Cart Button */}
        <div className="col-span-full text-center mt-4">
          <button
            className="flex items-center bg-[#FEF1E8] hover:bg-[#EDDED4] text-white font-bold py-2 px-4 rounded-md"
            onClick={toggleCart}
          >
            <FaShoppingCart className="mr-2" />
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Modal1 to display selected item details */}
      {selectedItem && (
       <Modal1 isOpen={true} onClose={closeModal}>
       <div className="flex flex-col md:flex-row items-center justify-center p-4">
         {/* Left Column for Image */}
         <div className="md:w-1/2 mb-4 md:mb-0">
           <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-96 object-cover" />
         </div>
     
         {/* Right Column for Text and Buttons */}
         <div className="md:w-1/2 md:pl-4">
           <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
           <p className="text-xl font-medium mb-2">£{selectedItem.price}</p> {/* Updated currency symbol */}
           <p className="text-lg mb-4">{selectedItem.description}</p>
           
           {/* Buttons */}
           <div className="flex flex-col md:flex-row">
             <button
               className="bg-[#FEF1E8] hover:bg-[#EDDED4] text-black font-bold py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2"
               onClick={() => addToCart(selectedItem)}
             >
               Add to Cart
             </button>
             <button
               className="bg-[#FEF1E8] hover:bg-[#EDDED4] text-black font-bold py-2 px-4 rounded-md"
               onClick={closeModal}
             >
               Close
             </button>
           </div>
         </div>
       </div>
     </Modal1>
     
      )}

      {/* Sliding cart drawer */}
      <div className={`fixed top-24 right-0 h-full bg-white shadow-lg transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`} style={{ width: '300px' }}>
        <div className="p-4 relative">
          <button
            className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4"
            onClick={toggleCart}
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2 flex justify-between items-center">
                <span>{item.name}</span>
                <span>£{item.price}</span> {/* Updated currency symbol */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold mt-4">
            Total: £{totalPrice} {/* Updated currency symbol */}
          </div>
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md w-full"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
