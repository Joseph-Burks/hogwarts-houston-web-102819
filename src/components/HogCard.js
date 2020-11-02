import React from 'react';
import HogDetails from './HogDetails';

class HogCard extends React.Component {
	state = {
		clicked: false,
		hidden: false,
	};

	getHogImage = name => {
		let formattedName = name.split(' ').join('_').toLowerCase();
		let picture = require(`../hog-imgs/${formattedName}.jpg`);
		return picture;
	};

	handleDetailsClick = () => {
		this.setState({
			clicked: !this.state.clicked,
		});
	};

	render() {
		const { hog } = this.props;
		return (
			<div className='ui card eight wide column pigTile'>
				<div
					style={
						this.props.hiddenHogs.includes(hog) && !this.props.hiddenChecked
							? { visibility: 'hidden' }
							: null
					}
				>
					<div className='image'>
						<img src={this.getHogImage(hog.name)} alt='Hog image' />
					</div>
					<div className='content'>
						<h3 className='header'>{hog.name}</h3>
						<div className='description'>Specialty: {hog.specialty}</div>
					</div>
					<div className='extra-content'>
						{this.state.clicked ? (
							<HogDetails
								hog={hog}
								handleHideHog={this.props.handleHideHog}
								hiddenHogs={this.props.hiddenHogs}
							/>
						) : null}
						<button className='ui button' onClick={this.handleDetailsClick}>
							{this.state.clicked ? 'Show Less' : 'Show More'}
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default HogCard;
