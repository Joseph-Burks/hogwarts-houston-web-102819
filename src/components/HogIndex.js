import React from 'react';
import HogCard from './HogCard';

class HogIndex extends React.Component {
	render() {
		console.log(this.props.hogs);
		return (
			<div className='ui three stackable cards'>
				{this.props.hogs.map(hog => {
					return (
						<HogCard
							hog={hog}
							hiddenHogs={this.props.hiddenHogs}
                            handleHideHog={this.props.handleHideHog}
                            hiddenChecked={this.props.hiddenChecked}
						/>
					);
				})}
			</div>
		);
	}
}
export default HogIndex;
