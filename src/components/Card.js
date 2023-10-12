import React from 'react';

const Card = ({ name, location, id }) => {
	return (
		<div className='inline-block p-4 m-2 bg-amber-300 rounded-lg hover:bg-amber-400 transition ease-in-out duration-150'>
			<img
				className='mb-3'
				alt=''
				src={`https://robohash.org/${id}?size=200x200`}
			/>
			<div>
				<h2 className='text-xl font-medium'>{name}</h2>
				<p className='text-md opacity-50'>{location}</p>
			</div>
		</div>
	);
};

export default Card;
