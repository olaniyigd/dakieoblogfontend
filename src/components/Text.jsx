// components/NewsSection.js
"use client"
import { useEffect, useState } from 'react';

const Text = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dakieoblogapi.onrender.com/contents');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        console.log(result, "resulyy")
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API:</h1>
    </div>
  );
};

export default Text;
