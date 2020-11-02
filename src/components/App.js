import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogIndex from './HogIndex';
import Filter from './Filter';

class App extends Component {
	state = {
		hogs: hogs,
		checked: false,
		sortBy: '',
    hiddenHogs: [],
    hiddenChecked: false
	};

	handleSelectChange = e => {
		this.setState({
			sortBy: e.target.value,
		});
	};

	handleToggleGreased = () => {
		this.setState({
			checked: !this.state.checked,
			hogs: !this.state.checked
				? this.state.hogs.filter(hog => hog.greased)
				: hogs,
		});
	};

	sortHogs = () => {
		switch (this.state.sortBy) {
			case 'name':
				return this.state.hogs.sort((a, b) => {
					return a.name.localeCompare(b.name);
				});
			case 'weight':
				return this.state.hogs.sort((a, b) => {
					return b.weight - a.weight;
				});
			default:
				return this.state.hogs;
		}
  };
  
	handleHideHog = hog => {
    this.setState({
      hiddenHogs: [...this.state.hiddenHogs, hog]
    })
  };

  handleToggleHidden = () => {
    this.setState({
      hiddenChecked: !this.state.hiddenChecked
    })
  }

	render() {
		return (
			<div className='App'>
				<Nav />
				<Filter
					handleToggleGreased={this.handleToggleGreased}
					checked={this.state.checked}
					handleSelectChange={this.handleSelectChange}
					sortBy={this.state.sortBy}
					handleToggleHidden={this.handleToggleHidden}
					hiddenChecked={this.state.hiddenChecked}
				/>
				<HogIndex
					hogs={this.sortHogs()}
					handleHideHog={this.handleHideHog}
          hiddenHogs={this.state.hiddenHogs}
          hiddenChecked={this.state.hiddenChecked}
				/>
			</div>
		);
	}
}

export default App;
