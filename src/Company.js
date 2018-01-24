import React, { Component } from 'react';
import Header from './Header';
import Add from './Add';
import Companieslist from './Companieslist';
import Companydetail from './Companydetail';

 class Company extends Component {
	
	constructor(){
		super();
		this.state={
			companies:[
             {name:'Google',desc:'Web Search',bgc:'#10AEE3'},
             {name:'Microsoft',desc:'Software',bgc:'#60C43F'},
             {name:'NetApp',desc:'Storage',bgc:'#E8E815'},
             {name:'Flipkart',desc:'Shopping',bgc:'#BCBCBC'}


			],
			selectedCompany:{}
		};
	}
   
   handleAdd(name, desc){
   	let newComp={name:name,desc:desc,bgc:'#'+Math.floor(Math.random()*0xffffff).toString(16)};
   	let companies=this.state.companies;
   	companies.push(newComp);
   	this.setState({companies});
   }

    handleCompanyClick(i){
    	// console.log(i);
    	let selectedCompany=this.state.companies[i];
    	this.setState({selectedCompany:selectedCompany});
    }
    handleCompanyRemove(i){
    	// console.log(i);
    	let companies=this.state.companies;
    	companies.splice(i,1);
    	let selectedCompany;
    	if (companies.length>0) 
    	{
    		selectedCompany=companies[0];
    	} 
    	else{
    		selectedCompany={};
    	}
    	this.setState({companies,selectedCompany});
    }

	render() {
		return (
			<div>
			   <Header title="Company Management Console"/>
               <Add onAdd={this.handleAdd.bind(this)}/><br/>
               <Companieslist companies={this.state.companies}
               onCompanyClick={this.handleCompanyClick.bind(this)}
               onCompanyRemove={this.handleCompanyRemove.bind(this)}/> <br/>
                <Companydetail currentCompany={this.state.selectedCompany}/>
			</div>
		);
	}
}
export default Company;