import React from 'react';
import styles from './field.module.css';

export const FieldLayout = ({ field, pressButton }) => {
	return (
		<div className={styles.containerField}>
			{field.map((item, index) => {
				return (
					<button
						onClick={() => pressButton(item, index)}
						className={
							item === ''
								? styles.buttonField
								: styles.buttonField__selected
						}
						key={index}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};
