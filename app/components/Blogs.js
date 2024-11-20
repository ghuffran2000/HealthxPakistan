import { useState } from "react";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const articles = [
    {
      id: 1,
      category: "news",
      date: "Jan 11.24",
      title: "Mental health Services should count as Healthcare",
      description:
        "AUSTIN, Texas, Jan. 11, 2024 — Ambiq@, a recognized technology leader in ultra-low power semiconducotrs for IOT endpoints today announced that it",
      image: "/news 2.png",
    },
    {
      id: 2,
      category: "news",
      date: "Jan 11.24",
      title: "Corporate wellness programs help save on healthcare....",
      image: "/news 3.png",
    },
    {
      id: 3,
      category: "blogs",
      date: "Jan 11.24",
      title: "The rising cost of healthcare is it too late to bring cost....",
      image: "/news 1.png",
    },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <div className="flex flex-col mt-20 mx-12">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-start">
        {/* Title */}
        <h2 className="text-4xl font-bold">
          <span className="text-[#1F8B7B]">Blogs </span>
          <span className="text-[#E9501D]">News &</span>
          <div className="font-thin">Events</div>
        </h2>

        {/* Header Info */}
        <div className="flex flex-row items-center space-x-2 mr-2">
          <h2 className="text-4xl font-bold text-[#E9501D1F]">08</h2>
          <p className="text-gray-600 font-semibold leading-tight">
            Blogs{" "}
            <span className="font-normal text-gray-600">
              <br /> We are committed to your health
            </span>
          </p>
        </div>
      </div>

      {/* Flex container for buttons and article grid */}
      <div className="flex flex-row mt-16 gap-4">
        {/* Category Buttons */}
        <div className="flex flex-col items-start text-md gap-8 font-normal w-1/4">
          {["all", "news", "blogs", "events"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category ? "text-black" : "text-gray-500"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[-1%] ml-28">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="p-4 flex flex-col space-y-2"
            >
              {/* Date */}
              <p className="text-gray-400 text-sm">{article.date}</p>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#E9501D]">{article.title}</h3>

              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-[90%] object-cover rounded-lg"
              />

              {/* Category */}
              <span className="text-sm font-semibold text-[#1F8B7B]">
                {article.category.toUpperCase()}
              </span>

              {/* Description Text */}
              <p className="text-gray-600 text-sm">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
