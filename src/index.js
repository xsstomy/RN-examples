import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import NavigatorRoot from './navigator/NavigatorRoot';
const store = configureStore();

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <NavigatorRoot />
            </Provider>
        );
    }
}

export default App;
