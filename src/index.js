import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './ConfigureStore';
import NavigatorRoot from './navigatorRoot/NavigatorRoot';
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
