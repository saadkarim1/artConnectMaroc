import React from "react";

const FormToAddEvent = () => {
	return (
		<div className='bg-white w-[70%] p-4 rounded-xl border border-[#d8b98c]'>
			<form
				// onSubmit={handleSubmit}
				className='flex flex-col space-y-2'
			>
				<div>
					<label className='text-sm font-semibold text-[#4C2010] my-2'>
						Title
					</label>
					<input
						type='text'
						placeholder='Enter artwork title'
						name='title'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
					/>
				</div>

				<div>
					<label className='text-sm font-semibold text-[#4C2010] my-2'>
						Description
					</label>
					<textarea
						type='text'
						placeholder='Enter description'
						name='region'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
					/>
				</div>
			</form>
		</div>
	);
};

export default FormToAddEvent;
