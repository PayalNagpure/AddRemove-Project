import React,{Component} from 'react';

 class Companydetail extends Component {
	render() {
		return (
			<div className="CompanyDetail" style={{backgroundColor:this.props.currentCompany.bgc}}>
                 <h1>{this.props.currentCompany.name}</h1>
                 <h2>{this.props.currentCompany.desc}</h2>
			</div>
		);
	}
}
export default Companydetail;