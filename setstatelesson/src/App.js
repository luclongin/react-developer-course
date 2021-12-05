import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			secretOfLife: 47
		}
		this.props = props
	}

	// best practices
	handleChange = () => {
		this.setState(
			(prevState, prevProps) => {
				return {secretOfLife: prevState.secretOfLife + prevProps.increment}
			}, () => console.log(this.state.secretOfLife));
	}

	render() {
		return(
			<div className = "App" >
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							{this.state.secretOfLife}
						</p>
						<button onClick={this.handleChange}>Change Value</button>
					</header>
			</div>
		);
	};
}
export default App;
