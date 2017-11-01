import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';



class RepeatxUI extends Component{
	constructor(){
		super();
		this.state = {
			floor1:[],
			floor2:[],
			floor3:[]
		}
	}
	componentDidMount() {
		var a = this.props.a;
		var b = a+1;
		var c = a+2;
		var d = a+3;

		axios.get('/Services/Proxy.ashx?r=201710301251&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
		.then((res)=>{
			console.log(res);
			this.state.floor1=res.data.data.templatelist[a].items;
			this.state.floor2=res.data.data.templatelist[b].items;
			this.state.floor3=res.data.data.templatelist[c].items
			this.state.floor4=res.data.data.templatelist[d].items
			this.setState({
				floor1:this.state.floor1,
				floor2:this.state.floor2,
				floor3:this.state.floor3
			})
		})
	}
	render(){
		var floor1 = null;
		var floor2 = null;
		var floor3 = null;
		var floor4 = null;
		if(this.state.floor1!=null){
			console.log(this.state.floor1)
			floor1 = this.state.floor1.map((item,index)=>{
				return <div className='floor1' key={item.itemid}>
					<NavLink to={"/detail/"+item.jumpurl.substring(item.jumpurl.indexOf('searchCondition=N%3D')+20,item.jumpurl.indexOf('searchCondition=N%3D')+28)}><img src={item.imgurl} /></NavLink>
				</div>
			})
		}
		if(this.state.floor2!=null){
			floor2 = this.state.floor2.map((item,index)=>{
					return <div className={'floor2-'+index} key={item.itemid}>
						<NavLink to={"/detail/"+item.jumpurl.substring(item.jumpurl.indexOf('searchCondition=N%3D')+20,item.jumpurl.indexOf('searchCondition=N%3D')+28)}><img src={item.imgurl} /></NavLink>
					</div>
			})
		}
		if(this.state.floor3!=null){
			floor3 = this.state.floor3.map((item,index)=>{
				return <div className={'floor3-'+index} key={item.itemid}>
					<NavLink to={"/detail/"+item.jumpurl.substring(item.jumpurl.indexOf('searchCondition=N%3D')+20,item.jumpurl.indexOf('searchCondition=N%3D')+28)}><img src={item.imgurl} /></NavLink>
				</div>
			})
		}
		if(this.state.floor4!=null){
			floor4 = this.state.floor4.map((item,index)=>{
				return <div className={'floor4'} key={item.itemid}>
					<NavLink to={"/detail/"+item.itemid}><img src={item.imgurl} /></NavLink>
				</div>
			})
		}

		return(
			<div id="repeat2">
				{floor1}
				<div className="floor2">
					{floor2}
				</div>
				<div className="floor3">
					{floor3}
				</div>
				{floor4}
			</div>
		)
	}
}



const mapState2props = (state,props)=>{
	return {
		list:state.list
	}
}

const mapDispatch2props = (dispatch,props)=>{
	return {

	}
}

const Repeatx = connect(mapState2props,mapDispatch2props)(RepeatxUI);

export default Repeatx;