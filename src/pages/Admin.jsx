import React from "react";

const Admin = () => {
	return (
		<>
			<div className='min-h-screen bg-[#f5e6d3] px-6 py-10'>
				{/* Search Bar */}
				{/* <div className="flex justify-center mb-8">
    <div className="flex items-center bg-[#d8b98c] rounded-full px-4 py-2 w-full max-w-md shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow bg-transparent outline-none placeholder:text-white/70 text-white px-2"
      />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1110.6-10.6 7.5 7.5 0 01-10.6 10.6z"
          />
        </svg>
      </button>
    </div>
  </div> */}

				{/* Navigation Tabs */}
				<div className='flex justify-center space-x-8 text-[#7b3e1c] font-semibold mb-10'>
					<button className='border-b-2 border-[#c35b1f] pb-1'>Artworks</button>
					<button>Categories</button>
					<button>Events</button>
					<button>Artisans</button>
				</div>

				{/* Section Title + Add Button */}
				<div className='flex justify-between items-center mb-8'>
					<h2 className='text-2xl font-bold text-[#7b3e1c] bg-[#e5d5b8] rounded-full px-6 py-2'>
						List of Artworks
					</h2>
					<button className='bg-[#c35b1f] text-white px-6 py-2 rounded-full shadow hover:bg-[#a34715] transition'>
						Add
					</button>
				</div>

				{/* Artworks Grid */}
				<div className='grid md:grid-cols-4 sm:grid-cols-2 gap-8'>
					{[...Array(8)].map((_, idx) => (
						<div
							key={idx}
							className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-md transition'
						>
							<img
								src='src/assets/Mosaico.jpeg'
								alt='Artwork'
								className='w-full h-48 object-cover'
							/>
							<div className='p-4'>
								<h3 className='font-semibold text-gray-800'>zlejj</h3>
								<p className='text-sm text-gray-500'>Casablanca</p>

								<div className='flex justify-end space-x-4 mt-3'>
									{/* Edit Button */}
									<button className='text-blue-500 hover:text-blue-700'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-5 h-5'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L8.747 18.905a4.5 4.5 0 01-1.897 1.13l-2.685.805a.75.75 0 01-.933-.933l.805-2.685a4.5 4.5 0 011.13-1.897L16.862 4.487z'
											/>
										</svg>
									</button>
									{/* Delete Button */}
									<button className='text-red-500 hover:text-red-700'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-5 h-5'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Admin;
