import React, { useState, useEffect } from "react";
import api from "../utils/api";
import TopSearches from "../components/TopSearch";
import ImageGrid from "../components/ImageGrid";
import { Link } from "react-router-dom";

const backend = import.meta.env.VITE_API_URL;

const HomePage = ({ user }) => {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);

  const search = async (e) => {
    e.preventDefault();
    if (!term) return;
    try {
      const res = await api.post("/api/search", { term });
      setImages(res.data.results);
      setTotal(res.data.total || res.data.results.length);
    } catch (err) {
      console.error(err);
      alert("Search failed. Make sure you're logged in and backend is running.");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Welcome, {user?.name}</h3>

        <div className="flex items-center gap-4 text-blue-600 font-medium">
          <Link to="/history" className="hover:underline">History</Link>
          <span>|</span>
          <button
            className="hover:underline cursor-pointer"
            onClick={() => { window.location.href = `${backend}/auth/logout`; }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Top Searches */}
      <TopSearches />

      {/* Search Form */}
      <form onSubmit={search} className="mt-6 flex gap-2">
        <input
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search images..."
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* Results count */}
      {term && (
        <div className="mt-4 text-gray-600">
          You searched for <span className="font-medium text-black">"{term}"</span> — {total} results.
        </div>
      )}

      {/* Images */}
      <div className="mt-6">
        <ImageGrid images={images} />
      </div>
    </div>
  );
};

export default HomePage;
