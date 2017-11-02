import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Mine.scss';

import img1 from '../../style/img/img1.png';

import img2 from '../../style/img/img2.png';

class MineUI extends Component{
	componentDidMount() {
		this.props.getList();
	}
	render(){
		return(
			<div id="Mine">
				<div className="hea">
					<div className="lef"><span className="iconfont">&#xe89f;</span></div>
					<div className="mid"><span>登录</span></div>
					<div className="rig"><span className="iconfont">&#xe606;</span></div>
				</div>
				<ul id="loginTabList" class="login">
			        <li class="login-tab-item active">银泰护照<b></b></li>
			        <li class="login-tab-item">银泰网账号</li>
			        <li class="login-tab-item scancode-login-tab">APP扫码登录</li>
			    </ul>
			    <div className="bot">
			    	<div class="inp-wrap">
			    		<img src={img1} width="25" height="25" />
			    		<input type="text" placeholder="请输入银泰护照号(手机号)" id="passportname" />
			    	</div>
			     	<div class="inp-wrap">
			    		<img src={img2} width="25" height="25" />
			    		<input type="password" placeholder="请输入密码" id="passportword" />
			    	</div>
			    	<div class="inp-wrap no-border-top yzhz">
                		<input type="text" placeholder="请输入验证码" id="ythzValidCode" />
                		<span class="yanz">
                			
                		</span>
           			</div>
           			<div id="passportLogin" class="login-button">登 录</div>
           			<div class="login-reg">
           				<a class="forget-password">忘记密码？</a>
           				<a class="register">注册</a>
           			</div>
           			<p class="ythz-desc">银泰护照即银泰门店会员账号，一般为手机号，如未设置过密码或忘记密码可点击“忘记密码”进行找回。
           			</p>
           			<p class="ythz-desc"><span>推荐您使用银泰护照进行登录。</span>使用银泰护照登录，将可在线享受银泰会员的一些权益，并与您线上账号进行关联，确保您的会员权益最大化。</p>
           			<div class="ft">
    					<p>客服电话：
    						<a href="tel:4001191111">400-119-1111</a>（8:00-24:00）
    					</p>
					</div>
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