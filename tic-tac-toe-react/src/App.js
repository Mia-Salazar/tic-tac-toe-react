import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Game from './components/Game'
import './App.css'

const App = () => {
  return (
		<div>
			<Header title={'tac'} pretitle={`Tic`} subtitle={'toe'}/>
			<main className="App">
				<div className="cards-container">
					<Game/>
				</div>
			</main>
			<Footer />
		</div>
  );
}

export default App;