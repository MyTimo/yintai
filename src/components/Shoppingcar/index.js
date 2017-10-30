import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

class ShoppingcarUI extends Component{
	componentDidMount() {
		this.props.getList();
	}
	render(){
		return(
			<div>

			</div>
		)
	}
}

// function getData(dispatch){
// 	axios.get('')
// 	.then((res)=>{
// 		dispatch({
// 			type:"",
// 			payload:
// 		})
// 	})
// }

const mapState2props = (state,props)=>{
	
}

const mapDispatch2props = (state,props)=>{
	return {
		getList:()=>{
			// getData(dispatch)
		}
	}
}

const Shoppingcar = connect(mapState2props,mapDispatch2props)(ShoppingcarUI);

export default Shoppingcar;