import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
		<div>
			<Header title={'tac'} pretitle={`Tic`} subtitle={'toe'}/>
			<main className="App">
					Holi
			</main>
			<Footer />
		</div>
  );
}

export default App;