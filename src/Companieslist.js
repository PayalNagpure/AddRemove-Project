import React, { Component } from 'react';
import './App.css';
import Companies from './Companies';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


 class Companieslist extends Component {
	
	onCompanyClick(i){
		this.props.onCompanyClick(i);

	}
	onCompanyRemove(i){
		this.props.onCompanyRemove(i);
	}

	render() {
		return (
			<div className="row">
			{this.props.companies.map(function(companyItem,i){
				return <Companies key={i} name={companyItem.name} bgc={companyItem.bgc}
				onCompClick={this.onCompanyClick.bind(this,i)}
				onCompRemove={this.onCompanyRemove.bind(this,i)}/>
			}, this)};
              

			</div>
		);
	}
}
export default Companieslist;