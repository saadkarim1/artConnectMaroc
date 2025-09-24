import React from "react";

const Favorite = () => {
	return <>
		   <div className="bg-[#e6cfa9] min-h-screen flex flex-col items-center px-6 py-10 rounded-lg">
      {/* Titre */}
      <div className="bg-[#c35b1f] text-white font-bold text-lg px-8 py-2 rounded-md mb-10">
        Favourite Category
      </div>

      {/* Liste des cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Carte */}
        <div className="border-2 border-[#c35b1f] rounded-lg overflow-hidden shadow-md bg-white w-70">
          <div className="relative">
            <img
              src="artConnectMaroc/src/assets/react.svg"
              alt="zellij"
              className="w-full h-40 object-cover"
            />
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
              {/* <Heart className="w-5 h-5 text-[#c35b1f] fill-[#c35b1f]" /> */}
            </button>
          </div>
          <div className="p-3 text-center">
            <h3 className="font-bold text-[#c35b1f]">zellij</h3>
            <p className="text-sm text-gray-700">Casablanca</p>
          </div>
        </div>

        {/* Dupliquer les cartes */}
        <div className="border-2 border-[#c35b1f] rounded-lg overflow-hidden shadow-md bg-white w-70">
          <div className="relative">
            <img
              src="/images/zellij.jpg"
              alt="zellij"
              className="w-full h-40 object-cover"
            />
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
              {/* <Heart className="w-5 h-5 text-[#c35b1f] fill-[#c35b1f]" /> */}
            </button>
          </div>
          <div className="p-3 text-center">
            <h3 className="font-bold text-[#c35b1f]">zellij</h3>
            <p className="text-sm text-gray-700">Casablanca</p>
          </div>
        </div>

        <div className="border-2 border-[#c35b1f] rounded-lg overflow-hidden shadow-md bg-white w-70">
          <div className="relative">
            <img
              src="/images/zellij.jpg"
              alt="zellij"
              className="w-full h-40 object-cover"
            />
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
              {/* <Heart className="w-5 h-5 text-[#c35b1f] fill-[#c35b1f]" /> */}
            </button>
          </div>
          <div className="p-3 text-center">
            <h3 className="font-bold text-[#c35b1f]">zellij</h3>
            <p className="text-sm text-gray-700">Casablanca</p>
          </div>
        </div>

        <div className="border-2 border-[#c35b1f] rounded-lg overflow-hidden shadow-md bg-white w-70">
          <div className="relative">
            <img
              src="/images/zellij.jpg"
              alt="zellij"
              className="w-full h-40 object-cover"
            />
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
              {/* <Heart className="w-5 h-5 text-[#c35b1f] fill-[#c35b1f]" /> */}
            </button>
          </div>
          <div className="p-3 text-center">
            <h3 className="font-bold text-[#c35b1f]">zellij</h3>
            <p className="text-sm text-gray-700">Casablanca</p>
          </div>
        </div>
      </div>
    </div>
	  




	</>
};

export default Favorite;