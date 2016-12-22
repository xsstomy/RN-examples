import React, { Component } from 'react';
import {
    ListView,
    TouchableHighlight
} from 'react-native';


class GameListView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                './html/one/index.html', './html/two/index.html'
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
                renderRow={(rowData) => <TouchableHighlight onPress={() => { this._onPressButton(rowData) } }>
                    <Text>{rowData}</Text>
                </TouchableHighlight>}
                />
            <Text>{this.state.textContent}</Text>
        </View>
        )
    }
}

export default GameListView;