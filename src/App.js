import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux:
import { Provider } from 'react-redux';
import store from './store.js';

// Views & Components:
import Header from './components/Header';
import ListProducts from './components/ListProducts';
import CreateProducts from './components/CreateProducts';
import EditProducts from './components/EditProducts';

function App() {
	return (
		<React.Fragment>
			<h1>A simple CRUD using React, Redux & Redux-Thunk</h1>
			<Provider store={store}>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/" component={ListProducts} />
						<Route exact path="/products/new" component={CreateProducts} />
						<Route exact path="/products/edit" component={EditProducts} />
					</Switch>
				</Router>
			</Provider>
		</React.Fragment>
	);
}

export default App;
