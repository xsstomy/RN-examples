import React, { Component } from 'react';
import { View, Text, WebView, TouchableHighlight } from 'react-native';

class MyWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: 'hello world'
        }
    }

    render() {
       
        return (
            <View style={
                {
                    backgroundColor: "#00ff00",
                    height: 1000
                }
            }>
                <TouchableHighlight onPress={() => {
                    this.props.navigator.push({
                        name: "list"
                    })
                } } >
                    <Text>{this.state.txt}</Text>
                </TouchableHighlight>
                <WebView style={
                    {
                        backgroundColor: "#ff0000",
                        height: 0
                    }
                } source={require("../../html/one/index.html" )}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    onError={() => { this.setState({ txt: 'error' }) } }
                    onLoad={() => { this.setState({ txt: this.props.router.htmlUrl }) } }
                    renderError={() => { this.setState({ txt: 'renderError ' }) } } />

            </View>
        )

    }
}

export default MyWebView;


// <WebView style={
//                     {
//                         backgroundColor: "#000000",
//                         height: 100,
//                     }
//                 } source={{ uri: "http://baidu.com" }}
//                     domStorageEnabled={true}
//                     javaScriptEnabled={false}
//                     onError={() => { this.setState({ txt: 'error' }) } }
//                     onLoad={() => { this.setState({ txt: 'load' }) } }
//                     renderError={() => { this.setState({ txt: 'renderError ' }) } } />