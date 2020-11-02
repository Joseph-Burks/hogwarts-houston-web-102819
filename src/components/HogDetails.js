import React from 'react';

const HogDetails = ({ hog, handleHideHog, hiddenHogs }) => {
    const { greased, weight } = hog
    const medal = hog['highest medal achieved'];
	return (
		<div className='description'>
			<strong>{greased ? 'Greased' : 'Nongreased'}</strong>
			<p>Highest Medal Achieved: {medal}</p>
			<p>
				Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
				with Thru-the-Door Ice and Water: <strong>{weight}</strong>
			</p>
			{hiddenHogs.includes(hog) ? <button className='ui button'>Banished</button> : <button className='ui button' onClick={() => handleHideHog(hog)}>Banish Hog</button>}
		</div>
	);
};

export default HogDetails;
