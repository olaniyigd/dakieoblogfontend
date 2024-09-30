"use client"
import { useState } from 'react';

const SportNews = () => {
  // Mock data for sport news (you can add more items if needed)
  const sportNews = [
    { id: 1, title: "Sport News 1", description: "Description for sport news 1", imageUrl: "/news.jpeg", time: new Date() },
    { id: 2, title: "Sport News 2", description: "Description for sport news 2", imageUrl: "/news.jpeg", time: new Date() },
    { id: 3, title: "Sport News 3", description: "Description for sport news 3", imageUrl: "/news.jpeg", time: new Date() },
    { id: 4, title: "Sport News 4", description: "Description for sport news 4", imageUrl: "/news.jpeg", time: new Date() },
    { id: 5, title: "Sport News 5", description: "Description for sport news 5", imageUrl: "/news.jpeg", time: new Date() },
    { id: 6, title: "Sport News 6", description: "Description for sport news 6", imageUrl: "/news.jpeg", time: new Date() },
    { id: 7, title: "Sport News 7", description: "Description for sport news 7", imageUrl: "/news.jpeg", time: new Date() },
    { id: 8, title: "Sport News 8", description: "Description for sport news 8", imageUrl: "/news.jpeg", time: new Date() },
    { id: 9, title: "Sport News 9", description: "Description for sport news 9", imageUrl: "/news.jpeg", time: new Date() },
    { id: 10, title: "Sport News 10", description: "Description for sport news 10", imageUrl: "/news.jpeg", time: new Date() },
    { id: 11, title: "Sport News 11", description: "Description for sport news 11", imageUrl: "/news.jpeg", time: new Date() },
    { id: 12, title: "Sport News 12", description: "Description for sport news 12", imageUrl: "/news.jpeg", time: new Date() },
  ];

  // States for controlling visible items and loading
  const [visibleNews, setVisibleNews] = useState(6);
  const [loading, setLoading] = useState(false);

  // Helper function to format time
  const formatTime = (date) => date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });

  // Function to load more news
  const loadMoreNews = () => {
    setLoading(true);

    // Simulate loading time
    setTimeout(() => {
      setVisibleNews((prevVisibleNews) => prevVisibleNews + 6);
      setLoading(false);
    }, 2000); // 2 seconds delay
  };

  return (
    <section className="container mx-auto px-4 py-8 mt-12">
      <h2 className="text-2xl font-bold mb-4">Sport News</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportNews.slice(0, visibleNews).map((news) => (
          <div key={news.id} className="border border-gray-300 rounded-lg p-4">
            <img src={news.imageUrl} alt={news.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="text-gray-600">{news.description}</p>
            <p className="text-gray-500 text-sm mt-1">{formatTime(news.time)}</p>
          </div>
        ))}
      </div>

      {/* Show 'See More' button only if there are more news items to load */}
      {visibleNews < sportNews.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreNews}
            className={`px-6 py-2 text-white font-semibold rounded-md transition-all duration-300 ${
               loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-600'
            }`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'See More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default SportNews;
