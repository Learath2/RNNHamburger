import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

export default class App {
	constructor() {
		this.startApp();
	}

	startApp() {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'example.MainScreen',
				title: 'Example',
				navigatorButtons: {
					leftButtons: [
						{
							title: 'Drawer',
							id: 'drawer',
							buttonColor: 'blue'
						}
					]
				}
			},
			drawer: {
				left: {
					screen: 'example.DrawerScreen'
				}
			}
		});
	}
}
