import React from 'react';
import Shouye from '../components/Shouye';
import Shoppingcar from '../components/Shoppingcar';
import Mine from '../components/Mine';
import Qiangxian from '../components/Qiangxian';
import Fenlei from '../components/Fenlei';
import Goods from '../components/Goods';
import Detail from '../components/Detail/index';
import Footer from '../components/Footer/index';
import Register from '../components/Mine/Register';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" render={()=><div><Shouye /><Footer /></div>}/>
      <Route path="/Fenlei/:film_id?" component={Fenlei}/>
      <Route path="/Mine" component={Mine}/>
      <Route path="/Qiangxian" component={Qiangxian}/>
      <Route path="/Shoppingcar" component={Shoppingcar}/>
      <Route path="/goods/:goods_id" component={Goods}/>

      <Route path="/Shoppingcar" component={Shoppingcar}/> 

      <Route path="/Detail/:detail_id?" component={Detail}  /> 

      <Route path="/Register" component={Register}/> 


      {/*<Route path="/Detail/:detail_id"   render={()=><div><Detail /><Footer /></div>} /> */}
    </div>
  </Router>
)
export default Routes;