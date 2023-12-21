import React from 'react';
import styles from './Information.module.css';

export const InformationLayout = ({ message, isGameEnded }) => {
	return (
		<div className={styles.informationContainer}>
			<div
				className={
					isGameEnded
						? styles.informationContainer__messageWiner
						: styles.informationContainer__message
				}
			>
				{message}
			</div>
		</div>
	);
};
