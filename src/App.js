import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import HostHome from './components/HostHome/HostHome';
import LoginPage from './components/LoginPage'

function App() {
	return (
		<Router>
			<div className="App">
				<Route path="/" component={NavBar} />
				<Route exact path="/" component={Home} />
				<Route path="/host/homes" component={HostHome} />
				<Route exact path="/login" component={LoginPage} />
			</div>
		</Router>
	);
}

export default App;