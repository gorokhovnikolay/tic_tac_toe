import React from 'react';
import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

let arrPlus = [];
let arrZero = [];
let copyField = [];

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const findeWinerVariant = (inspectedArr) => {
	return WIN_PATTERNS.some((arr) => {
		return arr.every((element) => inspectedArr.includes(element));
	});
};

const addTicTacToe = (
	{ field, setField, setCurrentPlayer, setIsGameEnded, setIsDraw, index },
	symbol,
) => {
	copyField = [...field];
	copyField[index] = symbol;
	setField(copyField);
	setCurrentPlayer(symbol === 'X' ? 'O' : 'X');
	symbol === 'X' ? arrPlus.push(index) : arrZero.push(index);

	if (findeWinerVariant(symbol === 'X' ? arrPlus : arrZero)) {
		setCurrentPlayer(symbol);
		setIsGameEnded(true);
		arrPlus = [];
		arrZero = [];
	} else if (!copyField.includes('')) {
		setIsDraw(true);
		arrPlus = [];
		arrZero = [];
	}
};

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	isGameEnded,
}) => {
	const pressButton = (item, index) => {
		if (item === '' && !isGameEnded) {
			const stateTicTacToe = {
				field,
				setField,
				setCurrentPlayer,
				setIsGameEnded,
				setIsDraw,
				index,
			};
			switch (currentPlayer) {
				case 'X':
					addTicTacToe(stateTicTacToe, 'X');
					break;
				case 'O':
					addTicTacToe(stateTicTacToe, 'O');
					break;

				default:
					break;
			}
		}
	};
	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
		arrPlus = [];
		arrZero = [];
	};

	return <FieldLayout field={field} pressButton={pressButton} resetGame={resetGame} />;
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	pressButton: PropTypes.func,
	resetGame: PropTypes.func,
};
