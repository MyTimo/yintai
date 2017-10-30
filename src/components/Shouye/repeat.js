import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';


class RepeatUI extends Component{
	componentDidMount() {
		this.props.getList();
	}
	render(){
		console.log(this.props.list)
		var items = this.props.list.map((item,index)=>{
			switch(index){
				case 0||4||8||12||16||21||26||30||34||38:
					return item.items.map((item,index)=>{
					return <p key={item.itemid}>{item.imgurl}</p>
			})
			}
		})
		return(
			<div id="Repeat">
				{items}
			</div>
		)
	}
}

function getData(dispatch){
	axios.get('/Services/Proxy.ashx?r=201710301251&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
	.then((res)=>{
		console.log(res);
		dispatch({
			type:"Repeat_Show",
			payload:res.data.data.templatelist.slice(11)
		})
	})
}

const mapState2props = (state,props)=>{
	return {
		list:state.list
	}
}

const mapDispatch2props = (dispatch,props)=>{
	return {
		getList:()=>{
			getData(dispatch)
		}
	}
}

const Repeat = connect(mapState2props,mapDispatch2props)(RepeatUI);

export default Repeat;