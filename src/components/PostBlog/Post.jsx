"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Quill } from "react-quill";

// Dynamically import React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Add Image handler for toolbar
const imageHandler = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const quill = window.quillRef.getEditor(); // Get the editor instance
        const range = quill.getSelection(); // Get the current cursor position
        quill.insertEmbed(range.index, "image", reader.result); // Insert image
      };
      reader.readAsDataURL(file); // Convert image file to base64 URL
    }
  };
};

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // Quill toolbar settings
  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline"],
        [{ align: [] }],
        ["link", "image"],
        ["clean"], // remove formatting button
      ],
      handlers: {
        image: imageHandler, // Call imageHandler when the image button is clicked
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Both title and content are required.");
      return;
    }

    const postData = { title, content };
    console.log("Blog Post Submitted:", postData);
    // Handle form submission (e.g., send postData to an API)
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-5 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create a Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your blog title"
          />
        </div>

        {/* React Quill Editor */}
        <div>
          <label htmlFor="content" className="block text-lg font-medium mb-2">
            Content
          </label>
          <ReactQuill
            ref={(el) => {
              if (el) window.quillRef = el;
            }}
            theme="snow"
            value={content}
            onChange={setContent}
            className="min-h-[200px] mb-4"
            modules={modules}
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogPostForm;
