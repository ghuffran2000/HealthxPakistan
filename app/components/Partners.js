const Partners = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-r from-[#E9501D1F] via-[#1F8B7B1F] to-[#EBC6621F] rounded-[20px] overflow-hidden ml-5 mt-24 mr-5 mb-5">
      {/* Number */}
      <div className="absolute top-0 left-10 mt-12">
        <h2 className="text-[#E9501D1F] text-5xl font-bold">07</h2>
      </div>

      {/* Title */}
      <div className="mt-8">
        <h2 className="text-[#CFCFCF] text-3xl font-semibold">Strategic Partners</h2>
      </div>

      {/* Partner Logos */}
      <div className="flex flex-row justify-center items-center gap-4 mt-12">
        <img src="/menalabs.png" alt="Partner 1" className="w-38 h-auto object-contain" />
        <img src="/roche.png" alt="Partner 2" className="w-38 h-auto object-contain" />
        <img src="/yodawy.png" alt="Partner 3" className="w-38 h-auto object-contain" />
        <img src="/lux.png" alt="Partner 4" className="w-38 h-auto object-contain" />
        <img src="/advantage.png" alt="Partner 5" className="w-38 h-auto object-contain" />
      </div>

      {/* Content Section */}
      <div className="flex flex-row w-full mt-16">
        {/* Text Section */}
        <div className="flex flex-col items-start ml-10 w-1/2">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F8B7B] to-[#E9501D] text-4xl">
            Healthx Pakistan
          </p>
          <h1 className="text-6xl font-bold text-[#E9501D] mt-1">Healthcare Solution</h1>
          <h2 className="text-5xl text-[#1E1E1E] mt-4 font-thin">For All</h2>
          <p className="text-[#2D4755] mt-6">
            As a multinational healthcare management company, we take pride in our team
            <br /> of experienced healthcare professionals.
          </p>
          <div className="flex flex-row w-[20%] mt-6 gap-4">
            <img src="/ios.png" alt="iOS Store" />
            <img src="/playstore.png" alt="Google Play Store" />
          </div>
        </div>

        {/* Image Section */}
        <div className=" flex ml-[10%] mt-[-18%]">
          <img src="/mobile.png" alt="Mobile" className="h-[100%] object-cover transform translate-y-[40%]" />
        </div>
      </div>

      {/* Partners Background Image */}
      <img
        src="partners.png"
        className="absolute bottom-0 w-[75%] ml-[30%] mt-[-5%]"
        alt="Partners"
      />
    </div>
  );
};

export default Partners;
