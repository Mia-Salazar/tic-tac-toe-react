import React, { useState } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { StyledGame } from './styles/StyledGame';
import Card from './Card'

const Game = () => {
	const { t, i18n } = useTranslation();
	const [ squares, setSquares ] = useState(Array(9).fill(null));

	function renderCard(i) {
		return <Card
			type={squares[i]}
			onClick={() => {
				const nextSquares = squares.slice();
				nextSquares[i] = 'X';
				setSquares(nextSquares);
			}}
		/>;
	  }

	return (
		<StyledGame>
			<div className="game">
				<div className="game-board">
					<div className="game-row">
						{renderCard(0)}
						{renderCard(1)}
						{renderCard(2)}
					</div>
					<div className="game-row">
						{renderCard(3)}
						{renderCard(4)}
						{renderCard(5)}
					</div>
					<div className="game-row">
						{renderCard(6)}
						{renderCard(7)}
						{renderCard(8)}
						<p>{t('title')}</p>
					</div>
				</div>
			</div>
		</StyledGame>
	);


}

Game.propTypes = {
    type: PropTypes.string
}

export default Game;