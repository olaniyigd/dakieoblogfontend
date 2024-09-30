// src/components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          
          {/* Footer Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">News</li>
              <li className="hover:text-gray-400 cursor-pointer">Sport</li>
              <li className="hover:text-gray-400 cursor-pointer">Politics</li>
              <li className="hover:text-gray-400 cursor-pointer">Business</li>
              <li className="hover:text-gray-400 cursor-pointer">Entertainment</li>
              <li className="hover:text-gray-400 cursor-pointer">Investigation</li>
            </ul>
          </div>
          
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are a leading media organization covering the latest news and updates on sports, politics, business, entertainment, and investigations.
            </p>
          </div>
          
          {/* Subscribe Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mb-4">Get the latest news and updates delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-4 sm:mt-0 sm:ml-2 p-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="bg-gray-800 py-4 mt-8">
          <div className="container mx-auto text-center">
            <p className="text-gray-400">&copy; 2024 MyWebsite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  