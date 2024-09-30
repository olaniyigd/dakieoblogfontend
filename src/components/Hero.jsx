"use client";
import { AuthContext } from "@/AuthContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useSelector } from "react-redux";

const NewsSection = () => {
  const router = useRouter();
  const trendingNews = {
    id: 5,
    title: "Trending News",
    description: "This is a trending news story that will appear prominently in the middle section.",
    imageUrl: "/news.jpeg",
    time: new Date(),
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const handleSeeMoreClick = (_id) => {
    // Navigate to the details page with the selected news ID
    router.push(`/news/${_id}`);
  };

  // Helper function to format the time to "dd/mm/yyyy hh:mm am/pm"
  const formatTime = (date) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-GB", options).replace(",", ""); // en-GB for dd/mm/yyyy format
  };

  const { userData, login, logout } = useContext(AuthContext);
  const Base_Url = "https://dakieoblogapi.onrender.com";

  return (
    <section className="container mx-auto px-4 py-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Latest News */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Latest News</h2>
          <ul className="space-y-6">
            {userData?.latest.map((news) => {
              let imageUrl = news.imagePath;
              if (imageUrl?.includes("http://localhost:4000")) {
                imageUrl = imageUrl.replace("http://localhost:4000", Base_Url); // Replace localhost with Base_Url
              } else if (imageUrl?.includes("undefined")) {
                imageUrl = imageUrl.replace("undefined", Base_Url);
              }

              return (
                <li key={news.id} className="flex flex-col md:flex-row items-start space-x-4 border-b border-gray-200 pb-4">
                  <img src={imageUrl} alt={news.title} className="w-full md:w-[15%] h-[15%] object-cover rounded-md mb-2 md:mb-0" />
                  <div>
                    <h3 className="text-[14px] font-semibold">{news.title}</h3>
                    <p className="text-gray-600 text-[14px]">
                      {truncateDescription(news.description, 100)}{" "}
                      <button onClick={() => handleSeeMoreClick(news._id)} className="text-blue-500 underline">
                        Read more
                      </button>
                    </p>
                    <p className="text-gray-500 text-[12px] mt-1">{formatTime(new Date(news.createdAt))}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Trending News */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4 text-center">Trending News</h2>
          <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
            <img src={trendingNews.imageUrl} alt={trendingNews.title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{trendingNews.title}</h3>
            <p className="text-gray-600 mt-2">{trendingNews.description}</p>
            <p className="text-gray-500 text-sm mt-1">{formatTime(trendingNews.time)}</p>
          </div>
        </div>

        {/* Top News */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Top News</h2>
          <ul className="space-y-6">
            {userData?.topContent.map((news) => {
              let imageUrl = news.imagePath;
              if (imageUrl?.includes("http://localhost:4000")) {
                imageUrl = imageUrl.replace("http://localhost:4000", Base_Url); // Replace localhost with Base_Url
              } else if (imageUrl?.includes("undefined")) {
                imageUrl = imageUrl.replace("undefined", Base_Url);
              }

              return (
                <li key={news.id} className="flex flex-col md:flex-row items-start space-x-4 border-b border-gray-200 pb-4">
                  <img src={imageUrl} alt={news.title} className="w-full md:w-[15%] h-[15%] object-cover rounded-md mb-2 md:mb-0" />
                  <div>
                    <h3 className="text-[14px] font-semibold">{news.title}</h3>
                    <p className="text-gray-600 text-[14px]">
                      {truncateDescription(news.description, 100)}{" "}
                      <button onClick={() => handleSeeMoreClick(news._id)} className="text-blue-500 underline">
                        Read more
                      </button>
                    </p>
                    <p className="text-gray-500 text-[12px] mt-1 ">{formatTime(new Date(news.createdAt))}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
