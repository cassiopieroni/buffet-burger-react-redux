import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Buffet from '../containers/Buffet';
import ShoppingBag from '../containers/ShoppingBag';
import Delivery from '../containers/Delivery';
import OrderConfirmed from '../containers/OrderConfirmed';
import NotFoundPage from '../components/NotFoundPage';


export default () => (
	<Switch>
		<Route path="/" exact component={ Home } />
		<Route path="/buffet" component={ Buffet } />
		<Route path="/shopping-bag" component={ ShoppingBag } />
		<Route path="/delivery" component={ Delivery } />
		<Route path="/order" component={ OrderConfirmed } />
		<Route component={ NotFoundPage } />
	</Switch>
);