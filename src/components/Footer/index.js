import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Footer.scss';

import '../../style/font_uk6b27d47j1hsemi/iconfont.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Footer extends Component {
	constructor() {
		super();
		// 初始化状态
		this.state = {
			
		}
		// 修正事件的指针
		// this.addTodo = this.addTodo.bind(this);
		// this.getMaizuo = this.getMaizuo.bind(this);
	}
	
	render() {
		return (
			<div id='Footer'>
				<ul className="cf">
					<li>
						<Link to={'/'}  href="//m.yintai.com" className="home">
							<i className="iconfont">&#xe600;</i><span>首页</span>
						</Link>
					</li>
					<li>
						<Link to={'/Qiangxian'} href="//m.yintai.com/LimitBuy/SaleActiveList" className="sale">
							<i className="iconfont">&#xe601;</i><span>抢先</span>
						</Link>
					</li>
					<li>
						<Link to={'/Fenlei/1'} href="//m.yintai.com/Category" className="class">
							<i className="iconfont">&#xe61f;</i><span>分类</span>
						</Link>
					</li>
					<li>
						<Link to={'/Shoppingcar'} href="//cart.yintai.com/?platformid=1" className="cart">
							<i className="iconfont">&#xe503;</i><span>购物车</span>
						</Link>
					</li>
					<li>
						<Link to={'/Mine'} className="my">
							<i className="iconfont">&#xe632;</i><span>我的银泰</span>
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Footer;