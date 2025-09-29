import React, { useEffect, useState } from "react";
import axios from "axios";

const Artisans = ({ place, refreshKey, setRefreshKey }) => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  const fetchArtisans = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5001/artisans");
      setArtisans(res.data);
    } catch (err) {
      console.error("Error fetching artisans:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtisans();
  }, [refreshKey]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this artisan?")) return;
    try {
      await axios.delete(`http://localhost:5001/artisans/${id}`);
      setRefreshKey((prev) => prev + 1);
    } catch (err) {
      console.error("Error deleting artisan:", err);
    }
  };

  const startEdit = (artisan) => {
    setEditingId(artisan.id);
    setEditName(artisan.name);
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(`http://localhost:5001/artisans/${id}`, { name: editName });
      setEditingId(null);
      setEditName("");
      setRefreshKey((prev) => prev + 1);
    } catch (err) {
      console.error("Error updating artisan:", err);
    }
  };

  if (loading) return <div>Loading artisans...</div>;

  return (
    <div className="bg-white w-[70%] p-4 rounded-xl border border-[#d8b98c]">
      <h2 className="text-lg font-bold mb-3 text-[#4C2010]">
        {place === "admin" ? "Manage Artisans" : "Our Artisans"}
      </h2>
      <ul className="space-y-2 text-sm">
        {artisans.map((artisan) => (
          <li
            key={artisan.id}
            className="border-b border-[#d8b98c] py-2 flex justify-between items-center"
          >
            {editingId === artisan.id ? (
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span>{artisan.name}</span>
            )}

            {place === "admin" && (
              <div className="flex gap-2">
                {editingId === artisan.id ? (
                  <button
                    onClick={() => saveEdit(artisan.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-xs"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(artisan)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                  >
                    Modifier
                  </button>
                )}
                <button
                  onClick={() => handleDelete(artisan.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                >
                  Supprimer
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artisans;
