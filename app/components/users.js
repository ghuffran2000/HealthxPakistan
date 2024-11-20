const Users = () => {
    return (
        <div className="flex items-start mt-10 ml-12">
            <p className="text-gray-600 mr-8">
                Trusted by more than <span className="text-[#E9501D] font-semibold">500,000+</span> <br />
                active users across the globe
            </p>

            <div className="flex items-center ml-16">
                <h2 className="text-[#1F8B7B] text-5xl font-semibold">50K</h2>
                <div className="ml-3">
                    <p className="text-gray-600">Ratings <br/> User</p>
                </div>

                <h2 className="text-[#1F8B7B] text-5xl font-semibold ml-40">95k</h2>
                <div className="ml-3">
                    <p className="text-gray-600">Experienced <br/> Clinics</p>
                </div>

                <h2 className="text-[#1F8B7B] text-5xl font-semibold ml-40">80%</h2>
                <div className="ml-3">
                    <p className="text-gray-600">Satisfied and <br/> Happy Clients</p>
                </div>
            </div>
        </div>
    );
};

export default Users;
