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
import Repeatx from './repeat2'

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
				<Repeat a={10}></Repeat>
				<Repeatx a={14}></Repeatx>
				<Repeat a={18}></Repeat>
				<Repeat a={26}></Repeat>
				<Repeatx a={31}></Repeatx>
				<Repeat a={36}></Repeat>
				<Repeatx a={40}></Repeatx>
				<Repeat a={44}></Repeat>
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