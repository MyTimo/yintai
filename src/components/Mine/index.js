import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

class MineUI extends Component{
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
	return
}

const mapDispatch2props = (state,props)=>{
	return {
		getList:()=>{
			// getData(dispatch)
		}
	}
}

const Mine = connect(mapState2props,mapDispatch2props)(MineUI);

export default Mine;