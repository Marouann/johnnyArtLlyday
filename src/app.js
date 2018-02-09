import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore } from 'redux'
import modaleId from './reducers/reducer.js'

var store = createStore(modaleId)

const render = () => ReactDOM.render(<App store={store} />, document.getElementById('app'));

render()
store.subscribe(render)
