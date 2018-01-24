import React, { Component } from 'react';
import './App.css';

 class Add extends Component {
	add(){
		this.props.onAdd(this.refs.cn.value, this.refs.cd.value);
	  this.refs.cn.value='';
	  this.refs.cn.value='';

}
	render() {

		

		return (
			<div >
			<input ref="cn" className="style"   type="text" placeholder="Enter Company Name"/>
			<input ref="cd" className="style"  type="text" placeholder="Enter Company Discription"/>
			<button className="btn" onClick={this.add.bind(this)}>Add</button>
			</div>
		);
	}
}
export default Add;