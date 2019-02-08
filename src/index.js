import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import * as serviceWorker from './serviceWorker';
import AppComponent from './App';
import configureStore from './util/configureStore'
import { ConnectedRouter } from 'connected-react-router'

const history = createBrowserHistory()
const store = configureStore(history, {})

const App = () => (
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <AppComponent />
        </ConnectedRouter>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
