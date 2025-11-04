import React, { useEffect, useState } from "react";
import api from "../utils/api";

const TopSearches = () => {
  const [top, setTop] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/api/top-searches");
        setTop(res.data);
      } catch (err) {
        console.log("Top searches failed", err);
      }
    })();
  }, []);
  return (
    <div style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
      <strong>Top Searches:</strong> {top.map(t => t.term).join(", ")}
    </div>
  );
};

export default TopSearches;
