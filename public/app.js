import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/app';
import { createStore } from 'redux'
import modaleId from './src/reducers/reducer.js'

var store = createStore(modaleId)

console.log(store)
console.log(store.getState())
const render = () => ReactDOM.render(<App store={store} />, document.getElementById('app'));

render()
store.subscribe(render)