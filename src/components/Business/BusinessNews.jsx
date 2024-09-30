"use client"
import { useState } from 'react';

const BusinessNews = () => {
  // Mock data for business news
  const businessNews = [
    { id: 1, title: "Business News 1", description: "Description for business news 1", imageUrl: "/news.jpeg", time: new Date() },
    { id: 2, title: "Business News 2", description: "Description for business news 2", imageUrl: "/news.jpeg", time: new Date() },
    { id: 3, title: "Business News 3", description: "Description for business news 3", imageUrl: "/news.jpeg", time: new Date() },
    { id: 4, title: "Business News 4", description: "Description for business news 4", imageUrl: "/news.jpeg", time: new Date() },
    { id: 5, title: "Business News 5", description: "Description for business news 5", imageUrl: "/news.jpeg", time: new Date() },
    { id: 6, title: "Business News 6", description: "Description for business news 6", imageUrl: "/news.jpeg", time: new Date() },
    { id: 7, title: "Business News 7", description: "Description for business news 7", imageUrl: "/news.jpeg", time: new Date() },
    { id: 8, title: "Business News 8", description: "Description for business news 8", imageUrl: "/news.jpeg", time: new Date() },
    { id: 9, title: "Business News 9", description: "Description for business news 9", imageUrl: "/news.jpeg", time: new Date() },
    { id: 10, title: "Business News 10", description: "Description for business news 10", imageUrl: "/news.jpeg", time: new Date() },
    { id: 11, title: "Business News 11", description: "Description for business news 11", imageUrl: "/news.jpeg", time: new Date() },
    { id: 12, title: "Business News 12", description: "Description for business news 12", imageUrl: "/news.jpeg", time: new Date() },
  ];

  // State for managing visible news items and loading state
  const [visibleNews, setVisibleNews] = useState(6);
  const [loading, setLoading] = useState(false);

  // Helper function to format the time
  const formatTime = (date) => date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });

  // Function to load more news
  const loadMoreNews = () => {
    setLoading(true);

    // Simulate a 2-second loading time before displaying more news
    setTimeout(() => {
      setVisibleNews((prevVisibleNews) => prevVisibleNews + 6);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="container mx-auto px-4 py-8 mt-12">
      <h2 className="text-2xl font-bold mb-4">Business News</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessNews.slice(0, visibleNews).map((news) => (
          <div key={news.id} className="border border-gray-300 rounded-lg p-4">
            <img src={news.imageUrl} alt={news.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="text-gray-600">{news.description}</p>
            <p className="text-gray-500 text-sm mt-1">{formatTime(news.time)}</p>
          </div>
        ))}
      </div>

      {/* Show the "See More" button if there are more items to load */}
      {visibleNews < businessNews.length && (
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

export default BusinessNews;
