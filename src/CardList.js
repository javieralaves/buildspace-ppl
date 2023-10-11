import React from 'react';
import { builders } from './builders';
import Card from './Card';

const CardList = () => {
	return (
		<div>
			{builders.map((_, i) => {
				return (
					<Card
						key={builders[i].id}
						id={builders[i].id}
						name={builders[i].name}
						location={builders[i].location}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
