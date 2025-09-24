import React from "react";

const About = () => {
	return <>
	<div className="min-h-screen bg-[#e6cfa9] flex items-center justify-center px-6 py-12">
  <div className="max-w-5xl w-full bg-[#fafafa] border border-[#d8b98c] rounded-3xl shadow-2xl p-10 relative overflow-hidden">

    {/* Decorative Moroccan Pattern */}
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[#c35b1f] to-[#e6cfa9] opacity-10 pointer-events-none" />

    {/* Header */}
    <h2 className="text-4xl font-bold text-[#c35b1f] text-center mb-8 tracking-wide">
      About ArtConnect Maroc
    </h2>

    {/* Mission Statement */}
    <p className="text-lg text-gray-800 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
      <span className="font-semibold text-[#a34715]">ArtConnect Maroc</span> aims to promote and preserve Moroccan art and culture. The platform connects artists, artisans, and enthusiasts across the country to share and enrich the cultural heritage.
    </p>
 {/* What You Can Do */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-[#fff8f0] border border-[#d8b98c] rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#c35b1f] mb-2">🎨 Explore Traditions</h3>
        <p className="text-gray-700 text-sm">Discover paintings, crafts, music, and other cultural pieces.</p>
      </div>
      <div className="bg-[#fff8f0] border border-[#d8b98c] rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#c35b1f] mb-2">🎭 Participate in Events</h3>
        <p className="text-gray-700 text-sm">Join exhibitions, workshops, and cultural gatherings.</p>
      </div>
      <div className="bg-[#fff8f0] border border-[#d8b98c] rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#c35b1f] mb-2">📤 Share & Discover</h3>
        <p className="text-gray-700 text-sm">Upload your creations and explore those of others.</p>
      </div>
    </div>

    {/* Our Values */}
    <div className="text-center">
      <h3 className="text-2xl font-bold text-[#D3662E] mb-4">Our Values</h3>
      <ul className="flex flex-wrap justify-center gap-6 text-[#D3662E] font-medium text-lg">
        <li className="px-4 py-2 bg-[#e5d5b8] rounded-full shadow-sm">Authenticity
          respect colture maroccain
        </li>

	
	      <li className="px-4 py-2 bg-[#e5d5b8] rounded-full shadow-sm">Innovation</li>
        <li className="px-4 py-2 bg-[#e5d5b8] rounded-full shadow-sm">Community</li>
      </ul>
    </div>
  </div>
</div>


	
	
	
	</>
};

export default About;
