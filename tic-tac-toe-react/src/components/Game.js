import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation, Trans } from 'react-i18next';
import { StyledGame } from './styles/StyledGame';
import Card from './Card'
import StartButton from './StartButton'
import { calculateWinner, isBoardFull } from '../index.js'

const Game = () => {
	const { t } = useTranslation();
	const [ squares, setSquares ] = useState(Array(9).fill(null));
	const [ isXNext, setIsXNext ] = useState(true);
	const winner = calculateWinner(squares);

	function renderCard(i) {
		return <Card
			type={squares[i]}
			onClick={() => {
				
				const nextSquares = squares.slice();
				nextSquares[i] = isXNext ? 'X' : 'O';
				setSquares(nextSquares);
				setIsXNext(!isXNext);
			}}
		/>;
	  }

	  function getStatus() {
		if (winner) {
		  return <p className="winner">{t('winner', {winner})}</p>;
		} else if (isBoardFull(squares)) {
		  return <p className="next-player">{t('draw')}</p>;
		} else {
		  return isXNext ? <p className="next-player"><Trans i18nKey={`nextX`}/></p> :  <p className="next-player"><Trans i18nKey={`nextO`}/></p>;
		}
	  }

	return (
		<StyledGame>
			<div className="game">
				<div className="game-board">
					<div className="game-info">{getStatus()}</div>
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
					</div>
					{ winner || isBoardFull(squares) 
					? <StartButton onClick={() => { setSquares(Array(9).fill(null)); setIsXNext(true);}}/> 
					: null}

				</div>
			</div>
		</StyledGame>
	);


}

Game.propTypes = {
    type: PropTypes.string
}

export default Game;