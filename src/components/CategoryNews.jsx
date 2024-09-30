const CategoryNews = () => {
    // Mock data for each category
    const sportNews = [
      { id: 1, title: "Sport News 1", description: "Description for sport news 1", imageUrl: "/news.jpeg", time: new Date() },
      { id: 2, title: "Sport News 2", description: "Description for sport news 2", imageUrl: "/news.jpeg", time: new Date() },
      { id: 3, title: "Sport News 3", description: "Description for sport news 3", imageUrl: "/news.jpeg", time: new Date() },
      { id: 4, title: "Sport News 4", description: "Description for sport news 4", imageUrl: "/news.jpeg", time: new Date() },
      { id: 5, title: "Sport News 5", description: "Description for sport news 5", imageUrl: "/news.jpeg", time: new Date() },
    ];
  
    const politicsNews = [
      { id: 1, title: "Politics News 1", description: "Description for politics news 1", imageUrl: "/news.jpeg", time: new Date() },
      { id: 2, title: "Politics News 2", description: "Description for politics news 2", imageUrl: "/news.jpeg", time: new Date() },
      { id: 3, title: "Politics News 3", description: "Description for politics news 3", imageUrl: "/news.jpeg", time: new Date() },
      { id: 4, title: "Politics News 4", description: "Description for politics news 4", imageUrl: "/news.jpeg", time: new Date() },
      { id: 5, title: "Politics News 5", description: "Description for politics news 5", imageUrl: "/news.jpeg", time: new Date() },
    ];
  
    const businessNews = [
      { id: 1, title: "Business News 1", description: "Description for business news 1", imageUrl: "/news.jpeg", time: new Date() },
      { id: 2, title: "Business News 2", description: "Description for business news 2", imageUrl: "/news.jpeg", time: new Date() },
      { id: 3, title: "Business News 3", description: "Description for business news 3", imageUrl: "/news.jpeg", time: new Date() },
      { id: 4, title: "Business News 4", description: "Description for business news 4", imageUrl: "/news.jpeg", time: new Date() },
      { id: 5, title: "Business News 5", description: "Description for business news 5", imageUrl: "/news.jpeg", time: new Date() },
    ];
  
    const entertainmentNews = [
      { id: 1, title: "Entertainment News 1", description: "Description for entertainment news 1", imageUrl: "/news.jpeg", time: new Date() },
      { id: 2, title: "Entertainment News 2", description: "Description for entertainment news 2", imageUrl: "/news.jpeg", time: new Date() },
      { id: 3, title: "Entertainment News 3", description: "Description for entertainment news 3", imageUrl: "/news.jpeg", time: new Date() },
      { id: 4, title: "Entertainment News 4", description: "Description for entertainment news 4", imageUrl: "/news.jpeg", time: new Date() },
      { id: 5, title: "Entertainment News 5", description: "Description for entertainment news 5", imageUrl: "/news.jpeg", time: new Date() },
    ];
  
    // Helper function to format time
    const formatTime = (date) => date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  
    // Reusable component for displaying news category
    const renderNewsCategory = (categoryName, newsData) => (
      <div>
        <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
        <ul className="space-y-4">
          {newsData.map((news) => (
            <li key={news.id} className="flex items-start space-x-4 border-b border-gray-200 pb-4">
              <img src={news.imageUrl} alt={news.title} className="w-32 h-32 object-cover rounded-md" />
              <div>
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-gray-600">{news.description}</p>
                <p className="text-gray-500 text-sm mt-1">{formatTime(news.time)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  
    return (
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sport News */}
          {renderNewsCategory("Sport", sportNews)}
  
          {/* Politics News */}
          {renderNewsCategory("Politics", politicsNews)}
  
          {/* Business News */}
          {renderNewsCategory("Business", businessNews)}
  
          {/* Entertainment News */}
          {renderNewsCategory("Entertainment", entertainmentNews)}
        </div>
      </section>
    );
  };
  
  export default CategoryNews;
  