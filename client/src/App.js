import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'materialize-css';
import './public/css/App.css';
import NavBar from './Components/NavBar';
import Homepage from './pages/Homepage';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Router>
				<Route exact path="/" component={Homepage} />
			</Router>
		</div>
	);
}

export default App;
