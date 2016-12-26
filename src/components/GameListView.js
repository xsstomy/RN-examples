import React, { Component } from 'react';
import {
    ListView,
    TouchableHighlight,
    View,
    Text,
    WebView
} from 'react-native';


class GameListView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                'one', 'two'
            ]),
            textContent: 'hello world'
        };

        this._onPressButton = this._onPressButton.bind(this);
    }

    _onPressButton(data) {
        this.setState({ textContent: data });

    }

    render() {
        return (<View style={{ flex: 1, paddingTop: 22 }}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <TouchableHighlight onPress={() => { 
                    this.props.navigator.push({
                        name: 'webview',
                        htmlUrl: rowData
                    });
                 } }>
                    <Text>{rowData}</Text>
                </TouchableHighlight>}
                />
                <Text>{this.state.textContent}</Text>
                <WebView style={
                    {
                        backgroundColor: "#ff0000",
                        height: 100
                    }
                } source={{baseUrl: '../../html/one/index.html'}}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                     />
            
        </View>
        )
    }
}

export default GameListView;