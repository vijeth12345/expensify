import ReactDOM from 'react-dom';
import React from 'react';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouters from './routers/AppRouters';

ReactDOM.render(<AppRouters />, document.getElementById('app'));
