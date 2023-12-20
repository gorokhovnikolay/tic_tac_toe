import React from 'react';
import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

let arrPlus = [];
let arrZero = [];

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
			switch (currentPlayer) {
				case 'X':
					const newArr1 = [...field];
					newArr1[index] = 'X';
					setField(newArr1);
					setCurrentPlayer('O');
					arrPlus.push(index);

					if (findeWinerVariant(arrPlus)) {
						setCurrentPlayer('X');
						setIsGameEnded(true);
						arrPlus = [];
						arrZero = [];
					} else if (!newArr1.includes('')) {
						setIsDraw(true);
					}
					break;
				case 'O':
					const newArr2 = [...field];
					newArr2[index] = 'O';
					setField(newArr2);
					setCurrentPlayer('X');
					arrZero.push(index);
					if (findeWinerVariant(arrZero)) {
						setCurrentPlayer('O');
						setIsGameEnded(true);
						arrZero = [];
						arrPlus = [];
					} else if (!newArr2.includes('')) {
						setIsDraw(true);
					}
					break;

				default:
					break;
			}
		}
	};

	return <FieldLayout field={field} pressButton={pressButton} />;
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	pressButton: PropTypes.func,
};
