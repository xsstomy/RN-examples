import React, { Component, PropTypes } from 'react';
import { WebView, Navigator, ListView, TouchableHighlight, Text } from 'react-native';



import GameListView from './GameListView';
import MyWebView from './MyWebView';
class Nav extends Component {
    static propsType = {
        source: PropTypes.string.isRequired
    }


    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                './html/one/index.html', './html/two/index.html'
            ]),
            textContent: 'hello world'
        };
    }

    doRenderScene(router, navigator) {
        const self = this;
        if (router.name === 'list') {
            return <GameListView navigator={navigator} />
        } else if (router.name === 'webview') {
            return <MyWebView navigator={navigator} router={router}/>
        }
    }

    render() {
        return <Navigator
            initialRoute={{ name: "list" }}
            renderScene={(router, navigator) => { return this.doRenderScene(router, navigator) } }

            />
    }
}

export default Nav;

// <MyScene
//     title={route.title}

//     // Function to call when a new scene should be displayed
//     onForward={() => {
//         const nextIndex = route.index + 1;
//         navigator.push({
//             title: 'Scene ' + nextIndex,
//             index: nextIndex,
//         });
//     } }

//     // Function to call to go back to the previous scene
//     onBack={() => {
//         if (route.index > 0) {
//             navigator.pop();
//         }
//     } }
//     />
//             }