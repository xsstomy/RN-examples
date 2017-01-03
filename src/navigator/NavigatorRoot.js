
import React, { Component } from 'react';
import {
  Navigator,
  BackAndroid,
} from 'react-native';
import Home from './Home';
import NavigatorRoute from './NavigatorRoute';

var _navigator = null;
export default class NavigatorRoot extends Component {
    render() {
        return (
            <Navigator
                ref='navigator'
                style={{flex: 1}}
                configureScene={this.configureScene}
                renderScene={this._renderScene}
                initialRoute={{
                    component: Home,
                }}/>
        );
    }

    _renderScene(route, navigator) {
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