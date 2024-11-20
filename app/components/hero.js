const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center  bg-gradient-to-r from-[#E9501D1F] via-[#1F8B7B1F] to-[#EBC6621F] rounded-[20px] overflow-hidden ml-5 mt-5 mr-5 mb-5">
      
      <div className="absolute right-0 top-1/4 mr-5">
        <div className="flex flex-col items-center space-y-4">
          {/* Step 1 */}
          <div className="flex items-center space-x-2">
            <div className="text-[#1F8B7B] font-bold text-md">01</div>
            <div className="w-1 h-16 bg-[#E9501D]" />
          </div>
          {/* Step 2 */}
          <div className="flex items-center space-x-2">
            <div className="text-[#B8D9D4] font-bold text-md">02</div>
            <div className="w-1 h-16 bg-[#B8D9D4]" />
          </div>
          {/* Step 3 */}
          <div className="flex items-center space-x-2">
            <div className="text-[#B8D9D4] font-bold text-md">03</div>
            <div className="w-1 h-16 bg-[#B8D9D4]" />
          </div>
          {/* Step 4 */}
          <div className="flex items-center space-x-2">
            <div className="text-[#B8D9D4] font-bold text-md">04</div>
            <div className="w-1 h-16 bg-[#B8D9D4]" />
          </div>
          {/* Step 5 */}
          <div className="flex items-center space-x-2">
            <div className="text-[#B8D9D4] font-bold text-md">05</div>
            <div className="w-1 h-16 bg-[#B8D9D4]" />
          </div>
          {/* Step 6 */}
          <div className="flex items-center space-x-2">
            <div className="text-[#B8D9D4] font-bold text-md">06</div>
            <div className="w-1 h-16 bg-[#B8D9D4]" />
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center w-full px-6 py-2 mt-6">
        <img src="/logo.png" alt="Logo" className="h-16 ml-2" />

        <div className="flex space-x-5 items-center mr-2">
          <a href="#" className="text-[#2D4755]">Solutions</a>
          <a href="#" className="text-[#2D4755]">Resources</a>
          <a href="#" className="text-[#2D4755]">About us</a>
          
          <div className="flex items-center space-x-1">
            <a href="#" className="text-[#2D4755]">eng</a>
            <button className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#2D4755]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <button className="bg-[#1F8B7B] text-white px-4 py-2 rounded-lg">
            Download App
          </button>
        </div>
      </nav>

      <div className=" absolute flex flex-col items-start ml-10 bottom-[15%] self-start">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F8B7B] to-[#E9501D] text-5xl">Healthx Pakistan</p>
        <h1 className="text-6xl font-bold text-[#E9501D] mt-1">Healthcare with a <span className="text-[#1F8B7B]">Heart</span> </h1>
        <h2 className="text-5xl text-[#1E1E1E] mt-2 font-thin">Where Every Life Matters</h2>
        
        <button className="bg-[#E9501D] text-white px-8 py-2 mt-12 rounded-lg">
          Contact Us
        </button>
      </div>

      <div className="ml-[50%]">
        <img src="/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
