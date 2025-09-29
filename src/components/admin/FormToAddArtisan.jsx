import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormToAddArtisan = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.warning("Enter artisan name");
      return;
    }

    try {
      const payload = { name };
      await axios.post("http://localhost:5001/artisans", payload);
      toast.success("Artisan added");
      setName("");
      if (onAdd) onAdd(); // dis au parent (Admin) de rafraîchir
    } catch (err) {
      console.error(err);
      toast.error("Error adding artisan");
    }
  };

  return (
    <div className="bg-white w-[70%] p-4 rounded-xl border border-[#d8b98c]">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <label className="text-sm font-semibold text-[#4C2010] my-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter artisan name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f]"
        />
        <button
          type="submit"
          className="bg-[#c35b1f] text-white px-4 py-2 rounded-lg hover:bg-[#a34715] transition"
        >
          Add Artisan
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormToAddArtisan;
