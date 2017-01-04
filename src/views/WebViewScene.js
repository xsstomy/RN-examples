import React, { Component } from 'react';
import { View, Text, WebView, TouchableHighlight, Navigator } from 'react-native';
import Home from './Home';
class WebViewScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: 'hello world'
        }
    }

    render() {

        return (
            <View style={{
                flex: 1
            }}>
                <View style={{
                    backgroundColor: "#ff0000",
                    flex: 10000
                }}>
                    <WebView style={{backgroundColor: "#00ff00"}}
                        source={require("../../html/one/index.html")}
                        domStorageEnabled={true}
                        javaScriptEnabled={true}
                        onError={() => { this.setState({ txt: 'error' }) } }
                        onLoad={() => { this.setState({ txt: "" }) } }
                        renderError={() => { this.setState({ txt: 'renderError ' }) } } />
                </View>
                <View style={{ flex: 1, top: -60, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight style={{backgroundColor: 'red', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigator.push({
                                component: Home,
                                name: 'Home',
                                configure:  Navigator.SceneConfigs.PushFromLeft
                            })
                        } }  >
                        <Text>
                            {this.props.route.htmlUrl}
            </Text>
                    </TouchableHighlight>
                </View>

            </View>
        )

    }
}

export default WebViewScene;


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