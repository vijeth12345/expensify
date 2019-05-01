import ReactDOM from 'react-dom';
import React from 'react';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is {props.title}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is a private component. Please dont share.</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>{props.isAuth ? <WrappedComponent {...props} /> : <p>Please login to view the info</p>}</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuth={true} title="an example" />, document.getElementById('app'));
