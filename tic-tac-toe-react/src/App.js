import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
		<div>
			<Header title={'tac'} pretitle={`Tic`} subtitle={'toe'}/>
			<main className="App">
				<div className="cards-container">
					<Card type={'x'}/>
					<Card type={'x'}/>
					<Card type={'x'}/>
					<Card type={'x'}/>
				</div>
			</main>
			<Footer />
		</div>
  );
}

export default App;