import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import WebViewScene from './WebViewScene';

const { width, height } = Dimensions.get('window');
class Home extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                'one', 'two'
            ]),
            textContent: 'hello world'
        };

    }

    render() {
        return (<View style={{ flex: 1, paddingTop: 22 }}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <TouchableHighlight onPress={() => {
                    this.props.navigator.push({
                        component: WebViewScene,
                        htmlUrl: rowData,
                        name: 'WebViewScene'
                    });
                } }>
                    <Text style={{flex:2 ,padding: 10}}>{rowData}</Text>
                </TouchableHighlight>}
                />
            <Text>{this.state.textContent}</Text>


        </View>
        )
    }
}

export default Home;
