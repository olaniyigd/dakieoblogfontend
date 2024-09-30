"use client";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/AuthContext";

const NewsDetails = () => {
  const pathname = usePathname(); // Get the current URL path
  const { userData } = useContext(AuthContext);

  // Extract the _id from the pathname (assuming the path is something like "/news/_id")
  const _id = pathname.split("/").pop();

  const [newsItem, setNewsItem] = useState(null); // State to store the fetched news data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    // Function to fetch news data based on _id
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`https://dakieoblogapi.onrender.com/content/${_id}`); // Replace with the actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        const data = await response.json();
        console.log(data?.content, "details daattaaa")
        setNewsItem(data?.content);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (_id) {
      fetchNewsData(); // Fetch data when _id is available
    }
  }, [_id]);

  if (loading) {
    return <p>Loading...</p>; // Display loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if there's an error
  }

  if (!newsItem) {
    return <p>No news item found</p>; // Display if no news data is available
  }

  const Base_Url = "https://dakieoblogapi.onrender.com";
  let imageUrl = newsItem.imagePath;
  if (imageUrl?.includes("http://localhost:4000")) {
    imageUrl = imageUrl.replace("http://localhost:4000", Base_Url); // Replace localhost with Base_Url
  } else if (imageUrl?.includes("http://dakieoblogapi.onrender.com")) {
    imageUrl = imageUrl.replace("http://dakieoblogapi.onrender.com", Base_Url);
  }

  return (
    <section className="container mx-auto px-4 py-8 mt-12">
      <div className="p-6 rounded-lg">
        {/* Image Section */}
        <div className="w-full flex justify-center items-center mb-4">
          <img
            src={imageUrl}
            alt={newsItem.title}
            className="w-full md:w-2/3 lg:w-1/2 h-60 md:h-80 lg:h-96 object-cover rounded-md shadow-md"
          />
        </div>
        {/* Content Section */}
        <h3 className="text-lg font-semibold text-center">{newsItem.title}</h3>
        <p className="text-gray-600 mt-2 text-justify">{newsItem.description}</p>
        <p className="text-gray-500 text-sm mt-1 text-right">{newsItem.createdAt}</p>
      </div>
    </section>
  );
};

export default NewsDetails;
