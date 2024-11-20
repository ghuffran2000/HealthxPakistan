const Team = () => {
    return (
        <div className="flex flex-col mt-20 mr-12">
            {/* Top Section */}
            <div className="flex justify-end">
                <h2 className="text-[#E9501D1F] text-4xl font-bold">04</h2>
                <div className="ml-3">
                    <p className="text-gray-600 font-semibold leading-tight">
                        Our Team <span className="font-normal"><br />We are committed to your Health</span>
                    </p>
                </div>
            </div>

            {/* Main Section */}
            <div className="ml-12 mt-20 flex flex-col lg:flex-row lg:space-x-8">
                {/* Text Section */}
                <div className="flex-1">
                    <h2 className="text-4xl font-thin">Visionaries of Health</h2>
                    <h2 className="text-[#E9501D] text-4xl font-bold">
                        Your <span className="text-[#1F8B7B]"> Partners </span> <br /> in Health
                    </h2>
                    <p className="text-md mt-6 text-gray-700 leading-relaxed">
                        As a multinational healthcare management <br />
                        company, we take pride in our team of experienced <br />
                        healthcare professionals who specialize in primary <br />
                        healthcare and patient management.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="flex-1 flex flex-col lg:flex-row lg:space-x-4 mt-8 lg:mt-0">
                    {/* Card 1 */}
                    <div className="flex flex-col relative">
                        <div className="relative bg-white shadow-lg mt-[-50px] w-64 h-80 mx-auto overflow-hidden lg:mx-0 lg:w-56 lg:h-72">
                            {/* Oval Badge */}
                            <div className="absolute top-2 right-2 bg-[#1F8B7B] text-white text-xs px-3 py-1 rounded-full shadow-md">
                                Pakistan
                            </div>
                            <img
                                src="/d1.png" 
                                alt="Doctor"
                                className="w-full object-cover transform scale-75"
                            />
                        </div>
                        <p className="mt-4 text-lg font-bold text-gray-800">
                            Dr. Hareem Riaz <br />
                            <span className="text-gray-600 text-sm font-normal">General Practitioner</span>
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col relative">
                        <div className="relative bg-white shadow-lg overflow-hidden w-64 h-80 mx-auto lg:mx-0 lg:w-56 lg:h-72">
                            {/* Oval Badge */}
                            <div className="absolute top-2 right-2 bg-[#E9501D] text-white text-sm px-3 py-1 rounded-full shadow-md">
                                canada
                            </div>
                            <img
                                src="/d2.png" 
                                alt="Doctor"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col relative">
                        <div className="relative bg-white shadow-lg overflow-hidden w-64 h-80 mx-auto lg:mx-0 lg:w-56 lg:h-72">
                            {/* Oval Badge */}
                            <div className="absolute top-2 right-2 bg-[#1F8B7B] text-white text-xs px-3 py-1 rounded-full shadow-md">
                                Pakistan
                            </div>
                            <img
                                src="/d3.png" 
                                alt="Doctor"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Dots Section */}
            <div className="flex ml-12 mt-[-2%]">
                <div className="flex space-x-3">
                    {/* Active Dot with Outer Circle */}
                    <div className="w-3 h-3 rounded-full border-2 border-[#E9501D] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#E9501D]"></div>
                    </div>
                    {/* Inactive Dots */}
                    <div className="w-3 h-3 rounded-full border-2 border-gray-400 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="w-3 h-3 rounded-full border-2 border-gray-400 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="w-3 h-3 rounded-full border-2 border-gray-400 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="w-3 h-3 rounded-full border-2 border-gray-400 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
