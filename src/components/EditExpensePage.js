import React from 'react';

const EditExpensePage = (props) => {
	console.log(props);
	return <div>editing with the example {props.match.params.id}</div>;
};

export default EditExpensePage;
