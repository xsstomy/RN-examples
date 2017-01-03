import React, { Component } from 'react';
import { View, Text, WebView, TouchableHighlight } from 'react-native';

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
                    backgroundColor: "#00ff00",
                    flex: 1
                }}>
                <View style={{
                        backgroundColor: "#ff0000",
                        flex: 10000
                    }}>
                    <WebView style={{
                        backgroundColor: "#ff0000",
                        
                    }}
                        source={require("../../html/one/index.html")}
                        domStorageEnabled={true}
                        javaScriptEnabled={true}
                        onError={() => { this.setState({ txt: 'error' }) } }
                        onLoad={() => { this.setState({ txt: this.props.router.htmlUrl }) } }
                        renderError={() => { this.setState({ txt: 'renderError ' }) } } />
                </View>
                <View style={{ flex:1, top: -60, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight style={{position:'absolute', backgroundColor: 'red', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }} onPress={() => {  this.props.navigator.push({
                        name: "list"
                    }) } }  >
                        <Text>
                            +
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