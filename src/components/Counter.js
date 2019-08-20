import React, { Component } from "react";
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

// initial state
const initialState = { count: 0 };

function reducer(state = initialState, action) {
	switch(action.type) {
		case 'ADD':
			return { count: state.count + 1};
		case 'MINUS':
			return { count: state.count - 1};
		case 'CUSTOM':
			return { count: state.count + action.payload };
		default:
			return state;
	}
}

const store = createStore(reducer);


export class Counter extends Component {
	render() {
		const { count, addOne, minuseOne } = this.props;
		return(
			<div className="counter">
				<button onClick={minuseOne}>-</button>
				<span>{count}</span>
				<button onClick={addOne}>+</button>
			</div>
		);
	}
}

function addOne() {
	return { type: 'ADD' };
}

function minuseOne() {
	return { type: 'MINUS' };
}

function mapStateToProps(state) {
	return {
		count: state.count
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addOne, minuseOne }, dispatch);
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);


export default class CounterSample extends Component {
	render() {
		return(
			<Provider store={store}>
				<ConnectedCounter></ConnectedCounter>
			</Provider>
		);
	}
}

