import React, {Component} from 'react';

export default class Home extends Component{
	render() {
		return(
			<>
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div id="content">
							<h1>ABC online!</h1>
							<hr/>
							<form action="/ABC">
								<div class="form-group">
									<button class="btn btn-default btn-lg">Use ABC <i class="fa fa-hand-rock"></i></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			</>
		);
	}
};
