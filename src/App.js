import React, { Component } from 'react';
// CatComponent is a default class - doesn't require curly brackets
import CatComponent from "./CatComponent.js";
// GraceHopperQuoteComponent is a custom class
import { GraceHopperQuoteComponent } from "./GraceHopperQuoteComponent";
import MouseComponent from "./MouseComponent.js";



class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
