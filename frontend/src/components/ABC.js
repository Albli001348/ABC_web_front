import React, {Component} from 'react';
import axios from 'axios';

export default class ABC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smt: "",
			args: [{key:"", value:""}],
		};

		this.updateSmt = this.updateSmt.bind(this);
	}

	updateSmt(value){
		this.setState({
			smt: value,
		});
	}

	addBound(key,value){
		const args = [...this.state.args];
		args[key] = value;

		this.setState({
			args,
		});
	}

		//deleteBound(){}

	render() {
		return(
			<>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<form>
								<div class="form-group">
									<label>SMT formula</label>
									<input
										type="text"
										class="form-control"
										name="smt"
										onChange={this.updateSmt}
										required/>
								</div>
								<div class="form-group">
									<button>Add argument</button>{
										this.state.args.map((k,val) =>{
											let arg = `${k}`, v = `${val}`
											return (
												<div key={arg}>
													<label htmlFor={arg}>{`Argument flag`}</label>
													<input
														type="text"
														name={arg}
														className="argument"
													/>
													<label htmlFor={v}>{`Value for Arguement`}</label>
													<input
														type="text"
														name={arg}
														className="argument"
													/>
												</div>
											)
										})
									}
								</div>
								<button>Submit</button>
							</form>
						</div>
					</div>
				</div>
			</>

		)
	}
}
