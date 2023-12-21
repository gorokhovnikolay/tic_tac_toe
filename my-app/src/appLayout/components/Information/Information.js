import React from 'react';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

let message = '';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	if (!isDraw && isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		message = `Ходит: ${currentPlayer}`;
	} else if (isDraw) {
		message = `Ничья`;
	}

	return <InformationLayout message={message} isGameEnded={isGameEnded} />;
};

Information.propTypes = {
	message: PropTypes.string,
	isGameEnded: PropTypes.bool,
};
