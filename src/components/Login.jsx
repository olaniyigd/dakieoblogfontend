// components/LoginForm.js
"use client";
import { AuthContext } from "@/AuthContext";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter(); // Initialize useRouter for navigation
  const { login } = useContext(AuthContext); // Assuming login is defined in AuthContext

  const validate = () => {
    let tempErrors = {};
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      const payload = { 
        email: email, 
        password: password 
      };

      try {
        const response = await fetch("https://dakieoblogapi.onrender.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);

          // Save the token using the context function and localStorage
          login(data.token); // Assuming you have login function in AuthContext
          localStorage.setItem("authToken", data.token); // Store the token in localStorage
       
          // Reset form
          setEmail("");
          setPassword("");
          
          // Redirect to home page
          router.push("/"); // Redirects to the home page when login is successful
          window.location.reload();
          router.push("/");
        } else {
          console.error("Login failed:", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your password"
          />
          <div
            className="absolute inset-y-0 right-0 pr-3 top-5 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-800 transition-colors ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
