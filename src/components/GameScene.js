import React, { Component, PropTypes } from 'react';
import { WebView } from 'react-native';


class GameScene extends Component {

    static propsType = {
        source: PropTypes.string.isRequired
    }

    constructor() {
        super(props);
    }

    render() {
        return <WebView source={require(this.props.webUrl)} domStorageEnabled={true} javaScriptEnabled={true} />
    }
}

export default GameScene;