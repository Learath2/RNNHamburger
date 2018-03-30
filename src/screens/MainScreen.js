import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
	}

	onNavigatorEvent(event) {
		if(event.type == 'NavBarButtonPress') {
			if(event.id == 'drawer') {
				this.props.navigator.toggleDrawer({ side: 'left' });
			}
		}
	}

	render() {
		return (
			<View>
				<Text>Hello World!</Text>
			</View>
		);
	}
}