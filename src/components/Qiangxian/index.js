import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Qiangxian.scss';

import Footer from '../Footer/index';

import { BackTop } from 'antd';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

class QiangxianUI extends Component{
	componentDidMount() {
		this.props.getList();
	}
	render(){
		var date = null;
		if(this.props.list.endtime){
			date = (new Date()).getTime()-Date.parse(this.props.list.endtime.split('T').join(','));	
		}
		
		return(
			<div id="Qiangxian">
				<div className="hea">
					<div className="lef"><span className="iconfont">&#xe89f;</span></div>
					<div className="mid"><span>抢先</span></div>
					<div className="rig"><span className="iconfont">&#xe606;</span></div>
				</div>
				<div class="menu" id="OrderType" ordertype="5">
    				<div class="key">
    					<div class="mkey current" data-bargaintagtype="5">
    						<a class="con" href="javascript:;" target="_self">
    							<b>推荐</b>
    						</a>
    					</div>
    				</div>
    				<div class="key">
    					<div class="mkey " data-bargaintagtype="1">
    						<a class="con" href="javascript:;" target="_self">
    							<b>最新</b>
    						</a>
    					</div>
    				</div>
    				<div class="key">
    					<div class="mkey " data-bargaintagtype="3">
    						<a class="con" href="javascript:;" target="_self">
    							<b>特卖爆推</b>
    						</a>
    					</div>
    				</div>
    				<div class="key">
    					<div class="mkey " data-bargaintagtype="4">
    						<a class="con" href="javascript:;" target="_self">
    							<b>倒计时</b>
    						</a>
    					</div>
    				</div>
    				<div class="key">
    					<div class="mkey " data-bargaintagtype="2">
    						<a class="con" href="javascript:;" target="_self">
    							<b>预告</b>
    						</a>
    					</div>
    				</div>
    				<input type="hidden" id="typeCondition" />
    			</div>
    			<div className="ml">
    			
    				<ul className="mk">
    				{
    					this.props.list.map((item,index)=>{
    						// console.log(new Date().getTime())
    						// console.log(item.endtime.getTime())
    						return <li class="active_item">
    						<Link to={'/Detail/' + item.leftsecond} class="active_item_link">
    							<img src={item.imgurl} width="100%" />
    							<span class="discount-info">
    								<span class="discount-num">{item.discount}</span>
    							</span>
    							<div class="active-flag-wrap"></div>
    						</Link>
    						<Link to={'/Detail/' + item.leftsecond} class="active-info" href="javascript:;">
    							<span class="f-l active-name">{item.name}</span>
    							<span class="f-r countdown" data-leftsecond="422815" data-start-time="2017-11-02T10:00:00">剩
    								<span class="ctd-num ctd-min">4</span>天
    							</span>
    						</Link>
    					</li>
    					})
    					
    				}
    					
    				</ul>
    				
    			</div>
    			<Footer />
                <div>
                    <BackTop />
                    
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
                   
                </div>
			</div>
		)
	}
}



function getData(dispatch){
	axios.get('/Services/Proxy.ashx?r=0.38344792639536274&type=5&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1')
	.then((res)=>{
		console.log(res.data.data.activityinfo[0].activitylist);
		dispatch({
			type:"Qiangxian_type",
			payload:res.data.data.activityinfo[0].activitylist
		})
	})
}

const mapState2props = (state,props)=>{
	return {list:state.list_Qiangxian}
}

const mapDispatch2props = (dispatch,props)=>{
	return {
		getList:()=>{
			getData(dispatch)
		}
	}
}

const Qiangxian = connect(mapState2props,mapDispatch2props)(QiangxianUI);

export default Qiangxian;