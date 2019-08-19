import React, { Component }from 'react';
import { createStore, bindActionCreators, combineReducers } from 'redux';


function run() {
	// intial state
	const initailState = { count: 1 };

	const reducer = (state = initailState, action) => {
		switch(action.type) {
			case 'add':
				return { count: state.count + 1};
			case 'minus':
				return { count: state.count - 1};
			default:
				return state;
		}
	}

	const todos = (state = {}) => state;
	const store = createStore(combineReducers({reducer, todos}));

	store.subscribe(() => { console.log(store.getState() )});

	function add() {
		return {
			type: 'add',
		}
	};

	function minuse() {
		return {
			type: 'minus',
		}
	};

	add = bindActionCreators(add, store.dispatch);

	// store.dispatch(add())
	add();
	store.dispatch(minuse())

}

export default () => (
	<div>
		<button onClick={run}>Run</button>
	</div>
)
