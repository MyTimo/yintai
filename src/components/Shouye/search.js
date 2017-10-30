import React ,{ Component } from 'react';

import {connect} from 'react-redux';


class Search extends Component{
	render() {
		return (
			<div id="search">
				<div className="header">
					<div className="logo"></div>
					<div className="search">
						<div className="mid">
							<div className="midinput">
								<input type="text" defaultValue="搜索商品or品牌" id="input-search" />
								<span>
									<i className="iconfont"></i>
								</span>
							</div>
						</div>
					</div>
					<div className="user">
						<a></a>
					</div>
				</div>
			</div>
		)
	}
}

export default Search

