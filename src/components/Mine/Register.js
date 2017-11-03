import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Register.scss';

import img1 from '../../style/img/img1.png';

import img2 from '../../style/img/img2.png';

class MineUI extends Component{

	render(){
		return(
			<div id="Register">
				<div className="hea">
					<a onClick={()=>{this.props.history.goBack()}} className="lef"><span className="iconfont">&#xe89f;</span></a>
					<div className="mid"><span>注册</span></div>
					<div className="rig"><span className="iconfont">&#xe606;</span></div>
				</div>
				<div className="jis">
					<div id="createYthzForm" class="ythzForm">
            			<div class="field">
                			<input id="cellPhone" type="text" ref='user' placeholder="请输入手机号" maxlength="11"/>
            			</div>
            			<div class="field">
                			<input id="validateCode" type="text" placeholder="请输入验证码"/>
            				<button id="getValidateCode" type="button" class="getValidteCode" value="获取验证码">获取验证码
            				</button>
            			</div>
            			<div class="field">
            				<input id="password" type="text" ref='pw' placeholder="请设置银泰护照密码" maxlength="12"/>
            			</div>
			            <div class="field">
			            	<input id="repassword" type="text" placeholder="请再次确认银泰护照密码" maxlength="12"/>
			            </div>
			            <p class="useExplain">请为护照设置密码（6到12位，英文+数字）</p>
			            <p class="useExplain">注册关联银泰护照后您可使用护照直接登录银泰网。银泰护照即银泰百货会员，注册后，在银泰百货商场可享受会员待遇，并可共享积分等。</p>
			            <button id="submitButton" class="button forbid" type="button" onClick={()=>this.props.register(this.refs.user.value,this.refs.pw.value,this)}>创建银泰护照
			            </button>
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
		register:function(user,pw,that){
			let data = {
				username:user,
				password:pw
			};
			axios.post('/api/register',data)
			.then((res)=>{
				if(res.data){
					alert("success");
					that.props.history.push('/Mine')
				}else{
					alert('error')
				}
			})
		}
	}
}

const Mine = connect(mapState2props,mapDispatch2props)(MineUI);

export default Mine;