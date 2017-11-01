import React ,{ Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

class Swiper extends Component{
	constructor(){
		super();
		this.state = {
			swipelist:[]
		}
	}


	componentDidMount(){
		axios.get('/Services/Proxy.ashx?r=20171028908&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
		.then((res)=>{
			this.state.swipelist = res.data.data.bannerlist;
			this.setState({
				swipelist : this.state.swipelist
			})

		}).catch((error)=>{
			console.log("XXX")
		})
	}

	/*render(){
		console.log(this.state.swipelist)
		var items = this.state.swipelist.map((item,index)=>{
			console.log(item.imgurl)
			return	
				<a href="#" key={item.id}><img src={item.imgurl} /></a>
					
		})
		return(
<div className="need-left-right-margin">
    <div className="sub-title">normal</div>
  				<Carousel
      className="my-carousel" autoplay={false} infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
    {items}
    </Carousel>
    <WhiteSpace />
    </div>
		)
	}*/

	render(){
		return(
			<div className="need-left-right-margin">
    			<div className="sub-title">normal</div>
    			<Carousel className="my-carousel" autoplay={true} infinite dots={true}>
      				{this.state.swipelist.map(item => (
        				<a href="#" key={item.id}><img src={item.imgurl} /></a>
      				))}
    			</Carousel>
    		</div>
		)
	}
}

export default Swiper



