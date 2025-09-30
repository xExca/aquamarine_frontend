const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 sm:px-10">
      <div className="flex flex-col md:flex-row justify-between items-start text-gray-700 font-sans">
        <div className="flex-1 md:pr-16 mb-8 md:mb-0">
          <p className="text-3xl font-semibold mb-4">Aquamarine.</p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-base mb-2">About Us</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Who we are</a></li>
              <li><a href="#" className="hover:text-black">Stores</a></li>
              <li><a href="#" className="hover:text-black">Rewards</a></li>
              <li><a href="#" className="hover:text-black">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-base mb-2">Top Collections</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Best Sellers</a></li>
              <li><a href="#" className="hover:text-black">Salt & Sun Collection</a></li>
              <li><a href="#" className="hover:text-black">Heatwave Collection</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-base mb-2">Customer Care</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Find your fit</a></li>
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns and Exchanges</a></li>
              <li><a href="#" className="hover:text-black">FAQs</a></li>
              <li><a href="#" className="hover:text-black">Contact us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex-1 md:pl-16 mt-8 md:mt-0">
          <p className="font-bold text-base mb-2">Sign up for our Newsletter</p>
          <p className="text-sm text-gray-600 mb-4">Get the inside scoop of our new launches and experiences!</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-500"
            />
            <button className="px-6 py-2 bg-gray-600 text-white text-sm rounded-r-md hover:bg-gray-700">
              Subscribe
            </button>
          </div>
          <p className="font-bold text-base mt-6 mb-2">We Accept Payments from</p>
          <div className="flex space-x-4 items-center">
            <img src="assets/banks/mastercard.png" alt="mastercard" className="w-10 h-6 object-contain" />
            <img src="assets/banks/visa.png" alt="visa" className="w-10 h-6 object-contain" />
            <img src="assets/banks/amex.png" alt="amex" className="w-10 h-6 object-contain" />
            <img src="assets/banks/paypal.png" alt="paypal" className="w-10 h-6 object-contain" />
            <img src="assets/banks/gcash.png" alt="gcash" className="w-10 h-6 object-contain" />
          </div>
        </div>
      </div>
      <div className="text-xs">
        <p>© 2025 Aquamarine</p>
        <div className="flex flex-wrap space-x-4 mt-2">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms and Conditions</a>
          <a href="#" className="hover:text-black">Shipping Policy</a>
          <a href="#" className="hover:text-black">Return and Exchange Policy</a>
        </div>
      </div>
     
    </div>
  );
};
export default Footer;
