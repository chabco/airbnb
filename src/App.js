import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
	return (
		<Router>
			<div className="App">
				{/* <header className="App-header"> */}
					<Route path="/" component={NavBar} />
					<Route exact path="/" component={Home} />
				{/* </header> */}
			</div>
		</Router>
	);
}

export default App;
