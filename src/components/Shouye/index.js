import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';
import './Shouye.scss'

import { BackTop } from 'antd';

import Search from './search'
import Swiper from './Carousel'
import Banner from './banner'
import Boom from './boom'
import Week from './week'
import Repeat from './repeat'
import Repeatx from './repeat2'
import List from './list'

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
				<Repeatx a={15}></Repeatx>
				<Repeat a={19}></Repeat>
				<Repeat a={27}></Repeat>
				<Repeatx a={32}></Repeatx>
				<Repeat a={37}></Repeat>
				<Repeatx a={41}></Repeatx>
				<Repeat a={46}></Repeat>
				<List></List>
				<div>
    				<BackTop />
    				Scroll down to see the bottom-right
    				<strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
    				button.
  				</div>
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