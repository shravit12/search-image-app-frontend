import React, { useEffect, useState } from "react";
import api from "../utils/api";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/api/history");
        setHistory(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-400">
      <h3 className="text-2xl font-bold mb-6">Your Search History</h3>

      <ul className="space-y-3">
        {history.map((h) => (
          <li
            key={h._id}
            className="p-4 border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="font-semibold text-gray-800">
              {h.term}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {new Date(h.timestamp).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
