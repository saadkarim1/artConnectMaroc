import React from "react";

const About = () => {
	return <>
	<div className="min-h-screen bg-[#f5e6d3] flex items-center justify-center px-6 py-16">
  <div className="max-w-6xl w-full bg-[#fffaf5] border border-[#d8b98c] rounded-3xl shadow-xl p-10 relative overflow-hidden">

    {/* Decorative Moroccan Gradient */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#c35b1f] to-[#e6cfa9] opacity-10 pointer-events-none" />

    {/* Header */}
    <h2 className="text-4xl font-bold text-[#c35b1f] text-center mb-10 tracking-wide">
      About ArtConnect Morocco
    </h2>

    {/* Mission */}
    <div className="bg-[#fff8f0] border border-[#d8b98c] rounded-xl p-6 mb-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#c35b1f] mb-2">🎯 Our Mission</h3>
      <p className="text-gray-800 text-base leading-relaxed">
        <span className="font-semibold text-[#a34715]">ArtConnect Morocco</span> aims to
        <span className="font-bold"> promote and preserve Moroccan art and culture</span>.  
        We connect artists, artisans, and cultural enthusiasts across the kingdom to share
        and celebrate the richness of Moroccan heritage.
      </p>
    </div>

    {/* What You Can Do */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-[#fff8f0] border border-[#d8b98c] rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#c35b1f] mb-2">🎨 Explore Creations</h3>
        <p className="text-gray-700 text-sm">
          Discover paintings, crafts, architecture, gastronomy, and traditional outfits by region or style.
        </p>
      </div>
      <div className="bg-[#fff8f0] border border-[#d8b98c] rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#c35b1f] mb-2">🎭 Join Events</h3>
        <p className="text-gray-700 text-sm">
          Follow and participate in cultural events to experience Moroccan art live.
        </p>
      </div>
      <div className="bg-[#fff8f0] border border-[#d8b98c] rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#c35b1f] mb-2">⭐ Save Your Favorites</h3>
        <p className="text-gray-700 text-sm">
          Add your favorite artworks and traditions to easily find them later.
        </p>
      </div>
    </div>

    {/* History */}
    <div className="bg-[#fff8f0] border border-[#d8b98c] rounded-xl p-6 mb-12 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#c35b1f] mb-2">📖 Our History</h3>
      <p className="text-gray-800 text-base leading-relaxed">
        Since its creation in 2025, ArtConnect Morocco has documented more than 
        <span className="font-bold"> 200 traditions and artworks</span> across the country.  
        The platform aims to <span className="font-bold">highlight local talents</span> and 
        transmit Moroccan know-how to new generations.
      </p>
    </div>

    {/* Values */}
    <div className="text-center">
      <h3 className="text-2xl font-bold text-[#D3662E] mb-6">Our Values</h3>
      <ul className="flex flex-wrap justify-center gap-6 text-[#D3662E] font-medium text-lg">
        <li className="px-6 py-3 bg-[#f3e3c8] rounded-full shadow-sm">
          Authenticity – Respect and promote Moroccan cultural heritage
        </li>
        <li className="px-6 py-3 bg-[#f3e3c8] rounded-full shadow-sm">
          Innovation – Encourage new creations and artistic forms
        </li>
        <li className="px-6 py-3 bg-[#f3e3c8] rounded-full shadow-sm">
          Community – A space where artists and enthusiasts share their passions
        </li>
      </ul>
    </div>
  </div>
</div>

	
	</>
};

export default About;
