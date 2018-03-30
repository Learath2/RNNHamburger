import { Navigation } from 'react-native-navigation';

import MainScreen from './MainScreen';
import DrawerScreen from './DrawerScreen';

export function registerScreens() {
	Navigation.registerComponent('example.MainScreen', () => MainScreen);
	Navigation.registerComponent('example.DrawerScreen', () => DrawerScreen);
}