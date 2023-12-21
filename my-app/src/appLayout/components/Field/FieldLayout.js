import React from 'react';
import styles from './field.module.css';

export const FieldLayout = ({ field, pressButton, resetGame }) => {
	return (
		<div>
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
			<div>
				<button className={styles.resetBtn} onClick={resetGame}>
					Начать заново
				</button>
			</div>
		</div>
	);
};
