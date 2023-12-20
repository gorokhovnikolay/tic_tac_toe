import React from 'react';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let message = '';

	if (!isDraw && isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		message = `Ходит: ${currentPlayer}`;
	} else if (isDraw) {
		message = `Ничья`;
	}
	return <InformationLayout message={message} />;
};

Information.propTypes = {
	message: PropTypes.string,
};
