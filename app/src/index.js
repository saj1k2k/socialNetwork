import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'
import store from "./redux/redux-store"
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
