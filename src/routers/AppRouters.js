import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, HashRouter, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';

const NotFoundPage = () => (
	<div>
		404!!! -<Link to="/">Go home</Link>
	</div>
);

const AppRouters = () => {
	return (
		<HashRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={ExpenseDashboardPage} exact={true} />
					<Route path="/create" component={AddExpensePage} />
					<Route path="/edit/:id" component={EditExpensePage} />
					<Route path="/help" component={HelpPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</HashRouter>
	);
};

export default AppRouters;
