import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';


const { width, height } = Dimensions.get('window');
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}