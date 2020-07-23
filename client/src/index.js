import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import Home from './routes/Home'
import Comic from './routes/Comic'
import Events from './routes/Events'
import On from './routes/On'

ReactDOM.render(
	<BrowserRouter>
        <Header/>
		<Switch>
			<Route path='/' exact={true} component={Home} />
            <Route path='/comics' component={Comic} />
            <Route path='/eventos' component={Events} />
            <Route path='/sobre' component={On} />
		</Switch>
        <Footer />
	</BrowserRouter>
    ,document.getElementById('root')
);

serviceWorker.unregister();