import React from 'react';
import PropTypes from 'prop-types';
import { Field, Information } from './components';
import styles from './App.module.css';

export const AppLayout = (state) => {
	return (
		<div className={styles.app}>
			<Information {...state} />
			<Field {...state} />
		</div>
	);
};

Field.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	resetGame: PropTypes.func,
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	resetGame: PropTypes.func,
};
