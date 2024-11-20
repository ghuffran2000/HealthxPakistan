const App = () => {
    return (
        <div className="flex flex-col mt-20">
            {/* Heading Section */}
            <div className="flex items-center ml-12 mt-12">
                <h2 className="text-[#E9501D1F] text-4xl font-bold">05</h2>
                <div className="ml-3">
                    <p className="text-gray-600 font-semibold leading-tight">
                        App Integrations <span className="font-normal"><br />We are committed to your Health</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center ml-12 mt-12">
                {/* Image Container */}
                <div
                    className="w-[42%] h-[450px] flex items-center justify-center rounded-[20px] overflow-hidden relative"
                    style={{
                        background: "linear-gradient(to right, #E9501D1F, #1F8B7B1F, #EBC6621F)",
                    }}
                >
                    <img
                        src="mobile.png"
                        alt="Mobile"
                        className="h-[180%] object-cover transform translate-y-[25%]"
                    />
                </div>

                <div className="flex flex-col ml-8">
                    <h2 className="text-4xl font-bold text-[#1F8B7B]">
                        INTEGRATED <span className="text-[#E9501D]">HEALTHCARE</span>
                    </h2>
                    <h2 className="text-3xl font-thin mt-2">MANAGEMENT APPLICATION</h2>

                    {/* Features List */}
                    <div className="mt-6 space-y-4">
                        {/* Feature 1 */}
                        <div className="flex items-center">
                            <img src="/double-tick.png" alt="Double Tick" className="w-6 h-6" />
                            <p className="ml-4 text-gray-600 ">
                                24x7 access to a trusted doctor online by video call, voice call, and live chat
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center">
                            <img src="/double-tick.png" alt="Double Tick" className="w-6 h-6" />
                            <p className="ml-4 text-gray-600 ">
                                Best doctors accessible from anywhere, any time, as many times as you need
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center">
                            <img src="/double-tick.png" alt="Double Tick" className="w-6 h-6" />
                            <p className="ml-4 text-gray-600">
                                Whole person care: preventive, promotive, curative and rehabilitative primary health care
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center">
                            <img src="/double-tick.png" alt="Double Tick" className="w-6 h-6" />
                            <p className="ml-4 text-gray-600 ">
                                Medical history in one place
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="flex items-center">
                            <img src="/double-tick.png" alt="Double Tick" className="w-6 h-6" />
                            <p className="ml-4 text-gray-600 ">
                                Medication and doctors appointment alerts
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="flex items-center">
                            <img src="/double-tick.png" alt="Double Tick" className="w-6 h-6" />
                            <p className="ml-4 text-gray-600">
                                Personalized health messaging and notifications
                            </p>
                        </div>

                        {/* Feature 7 */}
                        <div className="flex items-center">
                            <img src="/double-tick.png" alt="Double Tick" className="w-6 h-6" />
                            <p className="ml-4 text-gray-600">
                                Healthcare services offered in both English and Urdu
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                        <button className="px-4 py-2 bg-[#E9501D] text-white font-semibold rounded-lg ">
                            Download App
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
