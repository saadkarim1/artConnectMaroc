// import React from "react";

// const Footer = () => {
// 	return <div className='w-full bg-amber-600 h-80 px-18'>Footer</div>;
// };

// export default Footer;
import React from "react";
import {
  FaRegImage,
  FaUserTie,
  FaGlobeAfrica,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9e8d5] text-[#4C2010] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#d8b98c]">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h1 className="font-bold text-lg">ArtConnect Morocco</h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            Preserving and promoting Moroccan art and culture through a
            modern and accessible digital platform.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-bold mb-3">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#c35b1f]">Home</a>
            </li>
            <li>
              <a href="/publish" className="hover:text-[#c35b1f]">Publish</a>
            </li>
            <li>
              <a href="/favorite" className="hover:text-[#c35b1f]">Favorites</a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="font-bold mb-3">About</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-[#c35b1f]">Mission</a></li>
            <li><a href="/about" className="hover:text-[#c35b1f]">Values</a></li>
            <li><a href="/about" className="hover:text-[#c35b1f]">Contact</a></li>
          </ul>
        </div>

        {/* Statistics */}
        <div>
          <h2 className="font-bold mb-3">Statistics</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaRegImage className="text-[#c35b1f]" /> +20 Artworks
            </li>
            <li className="flex items-center gap-2">
              <FaUserTie className="text-[#c35b1f]" /> +5 Artisans
            </li>
            <li className="flex items-center gap-2">
              <FaGlobeAfrica className="text-[#c35b1f]" /> 6 Regions
            </li>
          </ul>
        </div>
      </div>

      {/* Contact & Social Media */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm flex items-center gap-2">
          <FaEnvelope className="text-[#c35b1f]" /> contact@artconnect.ma
        </p>
        <div className="flex space-x-4 text-xl text-[#4C2010]">
          <a href="#" className="hover:text-[#c35b1f]"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#c35b1f]"><FaInstagram /></a>
          <a href="#" className="hover:text-[#c35b1f]"><FaTwitter /></a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-600 py-4 border-t border-[#d8b98c]">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">ArtConnect Morocco</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
