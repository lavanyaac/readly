import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers/index.js';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = applyMiddleware(thunk, createLogger());


export default function store(preloadedState){
	return createStore(
		Reducer,
		preloadedState,
		middleware
	)
};