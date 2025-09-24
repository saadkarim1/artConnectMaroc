import React from "react";

const Favorite = () => {
	return <>
		   <div className=" min-h-screen flex flex-col items-center px-6 py-10 rounded-lg">
      {/* Titre */}
      <div className="bg-[#c35b1f] text-white font-bold text-lg px-8 py-2 rounded-md mb-10">
        Favourite Category
      </div>

      {/* Liste des cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Carte */}
        <div
					
						className='w-[100%] bg-[#FAF6F0]  rounded-2xl border-2 border-[#D3662E] overflow-hidden text-center'
					>
						<img src='src/assets/Mosaico.jpeg' alt='' className='w-full h-50' />
						<div className='font-bold text-[#652B15] my-1'>Zellij</div>
						<div className='my-1 text-[#D3662E]'>Casablanca</div>
					</div>

 <div
					
						className='w-[100%] bg-[#FAF6F0]  rounded-2xl border-2 border-[#D3662E] overflow-hidden text-center'
					>
						<img src='src/assets/Mosaico.jpeg' alt='' className='w-full h-50' />
						<div className='font-bold text-[#652B15] my-1'>Zellij</div>
						<div className='my-1 text-[#D3662E]'>Casablanca</div>
					</div>
          



           <div
					
						className='w-[300px] bg-[#FAF6F0]  rounded-2xl border-2 border-[#D3662E] overflow-hidden text-center'
					>
						<img src='src/assets/Mosaico.jpeg' alt='' className='w-full h-50' />
						<div className='font-bold text-[#652B15] my-1'>Zellij</div>
						<div className='my-1 text-[#D3662E]'>Casablanca</div>
					</div>
          





           <div
					
						className='w-[300px] bg-[#FAF6F0]  rounded-2xl border-2 border-[#D3662E] overflow-hidden text-center'
					>
						<img src='src/assets/Mosaico.jpeg' alt='' className='w-full h-50' />
						<div className='font-bold text-[#652B15] my-1'>Zellij</div>
						<div className='my-1 text-[#D3662E]'>Casablanca</div>
					</div>
          

           <div
					
						className='w-[300px] bg-[#FAF6F0]  rounded-2xl border-2 border-[#D3662E] overflow-hidden text-center'
					>
						<img src='src/assets/Mosaico.jpeg' alt='' className='w-full h-50' />
						<div className='font-bold text-[#652B15] my-1'>Zellij</div>
						<div className='my-1 text-[#D3662E]'>Casablanca</div>
					</div>
          
      </div>
    </div>
	  






	</>
};

export default Favorite;