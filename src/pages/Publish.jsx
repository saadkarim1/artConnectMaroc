import React from "react";

const Publish = () => {
	return <>
	




<div className="flex flex-col items-center justify-center min-h-screen bg-[#e6cfa9] px-6">
      <div className="w-full max-w-4xl bg-[#fafafa] rounded-2xl shadow-xl border border-[#d8b98c] p-10">

        {/* Header */}
        <h1 className="text-center text-4xl font-[#4C2010] bg-[#c35b1f] text-white py-5 rounded-xl mb-10 shadow-md tracking-wide">
          🖼 Publish 
        </h1>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Title */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text[#4C2010]-700 mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter artwork title"
              className="w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm"
            />
          </div>

          {/* Category */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text[#4C2010]-700 mb-2">Category</label>
            <select className="w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm">
  <option value="">Select category</option>
              <option>Crafts</option>
              <option>Gastronomy</option>
              <option>Clothing</option>
              <option>Architecture</option>
              <option>Music & Dance</option>
            </select>
          </div>
          

          {/* Region */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text[#4C2010]-700 mb-2">Region</label>
            <input
              type="text"
              placeholder="Enter region"
              className="w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm"
            />
          </div>

          {/* Image Upload */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text[#4C2010]-700 mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-[#d8b98c] rounded-lg p-3 bg-white focus:outline-none shadow-sm"
            />
</div>
        </form>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            type="button"
            className="bg-[#c35b1f] text-white px-6 py-3 rounded-lg hover:bg-[#a34715] transition shadow-md"
>
            Post
          </button>
          <button
            type="button"
            className="bg-[#e5d5b8] text-black px-6 py-3 rounded-lg hover:bg-[#d1c0a0] transition shadow-md"
>
            Cancel
          </button>
        </div>

        {/* Success Message */}
        <div className="mt-8 p-4 text-green-800 bg-green-100 border border-green-300 rounded-lg text-sm flex items-center gap-2 shadow-sm">
          <span className="text-lg">✅</span>
          <span>Success! Your artwork has been posted.</span>
        </div>
      </div>
    </div>
		
	</>
};

export default Publish;
