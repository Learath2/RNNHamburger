import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class MainScreen extends Component {
	render() {
		return (
			<View style={styles.drawer}>
				<Text>This is a drawer</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    drawer:{
        flex: 1,
        width: 300,
        elevation: 16,
        backgroundColor: '#f5f5f6',
        paddingTop: 20
    }
});