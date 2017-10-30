import React from 'react';
import Shouye from '../components/Shouye';
import Shoppingcar from '../components/Shoppingcar';
import Mine from '../components/Mine';
import Qiangxian from '../components/Qiangxian';
import Fenlei from '../components/Fenlei';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const Routes = () => (
  <Router>
    <div>
    

      <Route exact path="/" component={Shouye}/>
      <Route path="/Fenlei/:film_id" component={Fenlei}/>
      <Route path="/Mine" component={Mine}/>
      <Route path="/Qiangxian" component={Qiangxian}/>
      <Route path="/Shoppingcar" component={Shoppingcar}/> 

    </div>
  </Router>
)
export default Routes;