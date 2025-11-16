import React, { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    setIsLoading(true);
    setResult(null);

    // Simulate AI analysis delay
    setTimeout(() => {
      setIsLoading(false);
      setResult("No signs of diabetic retinopathy detected.");
    }, 2500);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/99t9W6H/eye-bg.jpg')", // same image as landing page
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Main Upload Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 text-white bg-black bg-opacity-60">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Retinal Image Upload
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
          Upload your retinal scan image to get an instant AI-based analysis.
        </p>

        <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg max-w-md w-full text-gray-800">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none mb-4 p-2"
          />

          {preview && (
            <div className="mb-4">
              <img
                src={preview}
                alt="Preview"
                className="rounded-lg w-full h-48 object-cover border"
              />
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={isLoading}
            className={`w-full py-3 rounded-full font-semibold text-white transition-all ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            {isLoading ? "Analyzing..." : "Upload and Analyze"}
          </button>

          {result && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg">
              <p className="text-green-800 font-semibold">{result}</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer (kept same as landing page) */}
      <footer className="bg-black bg-opacity-60 text-white text-center py-4 text-sm">
        <p>© 2025 Oculis. All rights reserved.</p>
        <p className="text-gray-300 text-xs mt-1">
          AI-Powered Retinal Disease Detection and Research Platform
        </p>
      </footer>
    </div>
  );
};

export default Upload;
