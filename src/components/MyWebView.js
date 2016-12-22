import React, { Component } from 'react';
import { WebView } from 'react-native';


class MyWebView extends Component {

    

    constructor() {
        super(props);
    }

    render() {
        return <WebView source={require(this.props.webUrl)} domStorageEnabled={true} javaScriptEnabled={true} />
    }
}

export default MyWebView;