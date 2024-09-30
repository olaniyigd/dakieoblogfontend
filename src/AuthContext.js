// context/AuthContext.js
"use client";
import { createContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null); // State for storing fetched data
  const [loading, setLoading] = useState(true);   // State for loading

  // Check if a token exists in localStorage when the app initializes
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Function to handle login and store token
  const login = (authToken) => {
    localStorage.setItem("authToken", authToken);
    setToken(authToken);
  };

  // Function to handle logout and remove token
  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    setUserData(null);  // Clear fetched data on logout
  };

  // Make a GET request to fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://dakieoblogapi.onrender.com/contents", {
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token || !token) {
      fetchUserData();
    }
  }, [token]); // Re-fetch when the token changes

  return (
    <AuthContext.Provider value={{ token, login, logout, userData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
