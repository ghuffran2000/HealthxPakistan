const About = () => {
    return (
        <div className="flex flex-col">
            <div className="flex mt-20">
                <div className="flex items-center ml-12 mt-[-46%]">
                    <h2 className="text-[#E9501D1F] text-4xl font-bold">02</h2>
                    <div className="ml-3">
                        <p className="text-gray-600 font-semibold leading-tight">
                            About Us <span className="font-normal"><br />We are committed to your Health</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col ml-[20%] mt-4">
                    <h2 className="text-4xl text-[#1F8B7B] font-bold">
                        Healthcare<span className="text-[#E9501D]"> Management for All</span>
                    </h2>
                    <p className="text-3xl mt-2 text-[#1E1E1E] font-thin">A Global Approach in Pakistan</p>
                
                    <p className="mt-6 text-md text-gray-700 leading-relaxed">
                        Powered by TruDoc, Healthx is a global healthcare management company providing high-<br />
                        quality primary healthcare services to all. Our primary function as a healthcare management<br />
                        company in Pakistan is to keep patients healthy and reduce costs for patients and payers. To <br />
                        meet the diverse needs of our customers, we offer a range of health-care plans.
                    </p>

                    <div
                        className="mt-8 w-full h-[450px] bg-gradient-to-r from-[#E9501D1F] via-[#1F8B7B1F] to-[#EBC6621F] rounded-[20px] flex items-center justify-center"
                    >
                    </div>
                </div>
            </div>

            <div
                className="mt-[-35%] w-[30%] h-72 flex items-center justify-center rounded-[20px] ml-12"
                style={{
                    background: "linear-gradient(to right, #E9501D1F, #1F8B7B1F, #EBC6621F)",
                }}
            >
                <video
                    src="/video.mp4" 
                    autoPlay
                    loop
                    muted
                    className="w-[100%] h-72 object-cover rounded-[20px] opacity-80 "
                ></video>
            </div>

            <div className="ml-12 mt-6">
                <p className="text-md text-gray-700 leading-relaxed">
                    Our progressive delivery model uses technology to<br />
                    provide healthcare services that are convenient for<br />
                    you, whether you need medical assistance at home, in <br />
                    the office, or while travelling.
                </p>
                <button
                    className="mt-4 px-6 py-2 bg-[#1F8B7B] text-white rounded-lg"
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default About;
