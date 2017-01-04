
import React, { Component } from 'react';
import {
    Navigator,
    BackAndroid,
    Platform 
} from 'react-native';
import Home from '../views/Home';
import NavigatorRoute from './NavigatorRoute';

var _navigator = null;
export default class NavigatorRoot extends Component {

    render() {
        return (
            <Navigator
                ref='navigator'
                style={{ flex: 1 }}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                initialRoute={{
                    component: Home,
                    name: 'Home'
                }} />
        );
    }

    configureScene(route) {
        if (route.configure) {
            return route.configure;
        }
        if (Platform.OS === 'ios') {
            return Navigator.SceneConfigs.PushFromRight;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene(route, navigator) {

        let Component = route.component;
        _navigator = navigator;
        return (
            <Component navigator={navigator} route={route} />
        );
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            return NavigatorRoute.navigatorPopBack(_navigator);
        });
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }
}