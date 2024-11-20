const Solutions = () => {
    return (
        <div className="flex flex-col bg-[#253239] mt-20">
            <div className="flex flex-row justify-between items-start mt-12 mx-12">
                <div>
                    <h2 className="text-[#E9501D] text-4xl font-bold">Bridging Gaps in Healthcare</h2>
                    <h2 className="text-white font-thin text-3xl mt-2">
                        Services for Individuals and Organizations
                    </h2>
                </div>
                <div className="flex flex-row items-center space-x-4 mr-2">
                    <p className="text-white font-semibold leading-tight text-end">
                        Our Solution{" "}
                        <span className="font-normal"> <br /> We are committed to your health </span>
                    </p>
                    <h2 className="text-[#1F8B7B] text-4xl font-bold">03</h2>
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 mt-12 mx-12">
                {/* Card 1 */}
                <div className="flex flex-col bg-[#253239] hover:bg-[#2D4755] p-6 shadow-xl">
                    <div className="flex h-16 mb-10">
                        <img src="/family.png" alt="Icon" className="w-24 h-24" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-4">INDIVIDUALS & <br/> FAMILIES</h3>
                    <p className="text-white text-md mb-6">
                        Given our fast-paced lives, visiting the doctor’s office has become a burden and an inconvenience for many.
                    </p>
                    <a href="#" className="text-[#E9501D] font-semibold text-sm hover:underline ml-[65%]">
                        Read More...
                    </a>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col bg-[#253239] hover:bg-[#2D4755] p-6 shadow-xl">
                    <div className="flex h-16 mb-10">
                        <img src="/corporate.png" alt="Icon" className="w-24 h-24" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-4">Corporate Health Solutions</h3>
                    <p className="text-white text-md mb-6">
                        Employees are a company’s greatest asset and an integral part of a company’s success. Therefore, keeping
                    </p>
                    <a href="#" className="text-[#E9501D] font-semibold text-sm hover:underline ml-[65%]">
                        Read More...
                    </a>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col bg-[#253239] hover:bg-[#2D4755] p-6 shadow-xl">
                    <div className="flex h-16 mb-10">
                        <img src="/healthcare.png" alt="Icon" className="w-24 h-24" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-4">Healthcare <br/> Insurance</h3>
                    <p className="text-white text-md mb-6">
                        Frequent overutilization of healthcare services has become a major concern for insurance companies.
                    </p>
                    <a href="#" className="text-[#E9501D] font-semibold text-sm hover:underline ml-[65%]">
                        Read More...
                    </a>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col bg-[#253239] hover:bg-[#2D4755] p-6 shadow-xl">
                    <div className="flex h-16 mb-10">
                        <img src="/govt.png" alt="Icon" className="w-24 h-24" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-4">Government Health Initiatives</h3>
                    <p className="text-white text-md mb-6">
                        HealthX understands the challenges governments face in providing accessible and affordable.
                    </p>
                    <a href="#" className="text-[#E9501D] font-semibold text-sm hover:underline ml-[65%]">
                        Read More...
                    </a>
                </div>
            </div>
                <p className="text-white ml-12 mt-12 mb-12">
                   Powered by TruDoc, Healthx is a global healthcare management company providing high-quality primary 
                   healthcare services to all. Our primary function as a healthcare <br/>
                   management company in Pakistan is to keep patients healthy and reduce costs for patients and payers. 
                   To meet the diverse needs of our customers, we offer a range of health-care plans.
                </p>
        </div>
    );
};

export default Solutions;
