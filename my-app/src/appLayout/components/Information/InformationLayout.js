import React from 'react';

export const InformationLayout = ({ message, resetGame }) => {
	return (
		<>
			<div>{message}</div>
			<button onClick={() => resetGame()}>Начать заново</button>
		</>
	);
};
