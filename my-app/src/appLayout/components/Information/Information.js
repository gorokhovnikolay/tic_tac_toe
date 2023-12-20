import React from 'react';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const Information = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
}) => {
	let message = '';

	if (!isDraw && isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		message = `Ходит: ${currentPlayer}`;
	} else if (isDraw) {
		message = `Ничья`;
	}

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return <InformationLayout message={message} resetGame={resetGame} />;
};

Information.propTypes = {
	message: PropTypes.string,
};
