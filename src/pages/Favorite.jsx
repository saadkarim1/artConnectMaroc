import React from "react";
import { IoHeartOutline } from "react-icons/io5";

const Favorite = () => {
	return (
		<>
			<div className=' min-h-screen flex flex-col items-center px-6 py-10 rounded-lg'>
				{/* Titre */}
				<div className='bg-[#c35b1f] text-white font-bold text-lg px-8 py-2 rounded-md mb-10 tracking-wide'>
					Favourite Category
				</div>

				{/* Liste des cartes */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 place-items-center'>
					{/* Carte */}
					<div className='p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden'>
						<img
							src='src/assets/Mosaico.jpeg'
							alt=''
							className='w-full h-50 rounded-xl'
						/>
						<div className='flex flex-col  items-center justify-center my-1'>
							<div className='font-bold text-[#652B15]'>Zellij</div>
							<div className=' text-[#D3662E]'>Casablanca</div>
							<button className='flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-[#D3662E] py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'>
								add to
								<IoHeartOutline className='inline text-lg' />
							</button>
						</div>
					</div>
					<div className='p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden'>
						<img
							src='src/assets/Mosaico.jpeg'
							alt=''
							className='w-full h-50 rounded-xl'
						/>
						<div className='flex flex-col  items-center justify-center my-1'>
							<div className='font-bold text-[#652B15]'>Zellij</div>
							<div className=' text-[#D3662E]'>Casablanca</div>
							<button className='flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-[#D3662E] py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'>
								add to
								<IoHeartOutline className='inline text-lg' />
							</button>
						</div>
					</div>
					<div className='p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden'>
						<img
							src='src/assets/Mosaico.jpeg'
							alt=''
							className='w-full h-50 rounded-xl'
						/>
						<div className='flex flex-col  items-center justify-center my-1'>
							<div className='font-bold text-[#652B15]'>Zellij</div>
							<div className=' text-[#D3662E]'>Casablanca</div>
							<button className='flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-[#D3662E] py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'>
								add to
								<IoHeartOutline className='inline text-lg' />
							</button>
						</div>
					</div>
					<div className='p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden'>
						<img
							src='src/assets/Mosaico.jpeg'
							alt=''
							className='w-full h-50 rounded-xl'
						/>
						<div className='flex flex-col  items-center justify-center my-1'>
							<div className='font-bold text-[#652B15]'>Zellij</div>
							<div className=' text-[#D3662E]'>Casablanca</div>
							<button className='flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-[#D3662E] py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'>
								add to
								<IoHeartOutline className='inline text-lg' />
							</button>
						</div>
					</div>
					<div className='p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden'>
						<img
							src='src/assets/Mosaico.jpeg'
							alt=''
							className='w-full h-50 rounded-xl'
						/>
						<div className='flex flex-col  items-center justify-center my-1'>
							<div className='font-bold text-[#652B15]'>Zellij</div>
							<div className=' text-[#D3662E]'>Casablanca</div>
							<button className='flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-[#D3662E] py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'>
								add to
								<IoHeartOutline className='inline text-lg' />
							</button>
						</div>
					</div>
					<div className='p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden'>
						<img
							src='src/assets/Mosaico.jpeg'
							alt=''
							className='w-full h-50 rounded-xl'
						/>
						<div className='flex flex-col  items-center justify-center my-1'>
							<div className='font-bold text-[#652B15]'>Zellij</div>
							<div className=' text-[#D3662E]'>Casablanca</div>
							<button className='flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-[#D3662E] py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'>
								add to
								<IoHeartOutline className='inline text-lg' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Favorite;
