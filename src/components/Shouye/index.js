import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';
import './Shouye.scss'

import Search from './search'
import Swiper from './Carousel'
import Banner from './banner'
import Boom from './boom'
import Week from './week'
import Repeat from './repeat'

class ShouyeUI extends Component{
	componentDidMount() {
		this.props.getList();

	}
	render(){
		return(
			<div>
				<Search></Search>
				<Swiper></Swiper>
				<Banner></Banner>
				<Boom></Boom>
				<Week></Week>
				<Repeat></Repeat>
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
	return{}
}

const mapDispatch2props = (state,props)=>{
	return {
		getList:()=>{
			// getData(dispatch)
		}
	}
}

const Shouye = connect(mapState2props,mapDispatch2props)(ShouyeUI);

export default Shouye;