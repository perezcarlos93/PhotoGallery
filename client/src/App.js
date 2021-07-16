import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "./index.css";

import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";

// Importing Pages
import Construction from "./pages/Construction";
import Homepage from "./pages/Homepage";
import Galleries from "./pages/Galleries";
// import AboutMe from "./pages/AboutMe";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Router>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/aboutme" component={Construction} />
				<Route exact path="/galleries" component={Galleries} />
				<Route exact path="/contactme" component={Construction} />
			</Router>
		</div>
	);
}

export default App;
