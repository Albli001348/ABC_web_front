import React, {Component} from 'react';
import axios from 'axios';

export default class ABC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smt: null,
			bounds: {}
		};
	}

	updateSmt(value){
		this.setState({
			smt: value,
		});
	}

	addBound(key,value){
		const bounds = [...this.state.list];
		bounds[key] = value;

		this.setState({
			bounds,
		});
	}

	deleteBound(
}
