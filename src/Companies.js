import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 class Companies extends Component {
	onCompanyClick(){
		this.props.onCompClick();
	}

     onCompanyRemove(e){
		this.props.onCompRemove();
		e.stopPropagation();
	}

	render() {
		return (
			<div className="divstyle" style={{backgroundColor:this.props.bgc}}
			onClick={this.onCompanyClick.bind(this)}>
              <button className="rmv" onClick={this.onCompanyRemove.bind(this)}>Remove</button>
              <h2>{this.props.name}</h2>
			</div>
		);
	}
}
export default Companies;