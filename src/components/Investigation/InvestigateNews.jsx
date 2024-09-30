"use client"
import { useState } from 'react';

const InvestigationNews = () => {
  // Mock data for investigation news
  const investigationNews = [
    { id: 1, title: "Investigation News 1", description: "Description for investigation news 1", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 2, title: "Investigation News 2", description: "Description for investigation news 2", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 3, title: "Investigation News 3", description: "Description for investigation news 3", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 4, title: "Investigation News 4", description: "Description for investigation news 4", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 5, title: "Investigation News 5", description: "Description for investigation news 5", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 6, title: "Investigation News 6", description: "Description for investigation news 6", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 7, title: "Investigation News 7", description: "Description for investigation news 7", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 8, title: "Investigation News 8", description: "Description for investigation news 8", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 9, title: "Investigation News 9", description: "Description for investigation news 9", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 10, title: "Investigation News 10", description: "Description for investigation news 10", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 11, title: "Investigation News 11", description: "Description for investigation news 11", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
    { id: 12, title: "Investigation News 12", description: "Description for investigation news 12", imageUrl: "/news.jpeg", time: new Date(), author: "Dakieo" },
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
      <h2 className="text-2xl font-bold mb-4">Investigation News</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {investigationNews.slice(0, visibleNews).map((news) => (
          <div key={news.id} className="border border-gray-300 rounded-lg p-4">
            <img src={news.imageUrl} alt={news.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="text-gray-600">{news.description}</p>
            <p className="text-gray-500 text-sm mt-1">{formatTime(news.time)}</p>
            <p className="text-gray-500 text-sm mt-1 italic">Author: {news.author}</p>
          </div>
        ))}
      </div>

      {/* Show the "See More" button if there are more items to load */}
      {visibleNews < investigationNews.length && (
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

export default InvestigationNews;
