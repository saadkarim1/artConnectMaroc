

import React, { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [message, setMessage] = useState(null);

  // Validation du formulaire
  const validateForm = () => {
    if (!title || !category || !region) {
      setMessage({
        type: "error",
        text: "Tous les champs sont obligatoires.",
      });
      return false;
    }
    return true;
  };

  // Gestion de l'envoi
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const payload = { title, category, region };
      await axios.post("http://localhost:3001/posts", payload);

      setMessage({
        type: "success",
        text: "Œuvre publiée avec succès !",
      });

      // Reset du formulaire
      setTitle("");
      setCategory("");
      setRegion("");
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: "Erreur lors de la publication.",
      });
    }
  };

  // Reset du formulaire
  const handleCancel = () => {
    setTitle("");
    setCategory("");
    setRegion("");
    setMessage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="w-full max-w-3xl bg-[#fafafa] rounded-2xl shadow-xl border border-[#d8b98c] p-10">
        {/* Header */}
        <h1 className="text-center text-2xl font-[#4C2010] bg-[#c35b1f] text-white py-2 rounded-xl mb-10 shadow-md tracking-wide">
          Publish
        </h1>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Title */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-[#4C2010] mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter artwork title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm"
            />
          </div>

          {/* Category */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-[#4C2010] mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm"
            >
              <option value="">Select category</option>
              <option>Tapis</option>
              <option>Zllej</option>
              <option>Ceramek</option>
              <option>Architecture</option>
              <option>Khazaf</option>
            </select>
          </div>

          {/* Region */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-[#4C2010] mb-2">
              Region
            </label>
            <input
              type="text"
              placeholder="Enter region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm"
            />
          </div>

          {/* Image Upload  */}
          
          {/* <div>
            <label className='block text-sm font-semibold text-[#4C2010] mb-2'>
              Image
            </label>
            <div className='border-2 border-dashed border-[#d8b98c] rounded-lg p-6 text-center bg-[#fafafa]'>
              <p className='text-gray-500 mb-3'>
                Drag & drop your image here or
              </p>
              <input
                type='file'
                accept='image/*'
                className='hidden'
                id='fileInput'
              />
              <label
                htmlFor='fileInput'
                className='inline-block bg-[#c35b1f] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#a34715] transition'
              >
                Choose File
              </label>
              <p className='text-xs text-gray-400 mt-2'>
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
           */}







        </form>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#c35b1f] cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-[#a34715] transition shadow-md"
          >
            Post
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-[#e5d5b8] cursor-pointer text-black px-6 py-3 rounded-lg hover:bg-[#d1c0a0] transition shadow-md"
          >
            Cancel
          </button>
        </div>

        {/* Notification */}
        {message && (
          <div
            className={`mt-8 p-4 ${
              message.type === "success"
                ? "text-green-800 bg-green-100 border-green-300"
                : "text-red-800 bg-red-100 border-red-300"
            } border rounded-lg text-sm flex items-center gap-2 shadow-sm`}
          >
            <span className="text-lg">{message.type === "success" ? "✅" : "❌"}</span>
            <span>{message.text}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publish;
