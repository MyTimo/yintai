import React from 'react';
import Shouye from '../components/Shouye';
import Shoppingcar from '../components/Shoppingcar';
import Mine from '../components/Mine';
import Qiangxian from '../components/Qiangxian';
import Fenlei from '../components/Fenlei';
import Goods from '../components/Goods';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const Routes = () => (
  <Router>
    <div>
    

      <Route exact path="/" component={Shouye}/>
      <Route path="/Fenlei" component={Fenlei}/>
      <Route path="/Mine" component={Mine}/>
      <Route path="/Qiangxian" component={Qiangxian}/>
      <Route path="/Shoppingcar" component={Shoppingcar}/>
      <Route path="/goods/:goods_id" component={Goods}/>

    </div>
  </Router>
)
export default Routes;