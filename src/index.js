import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers';
import registerServiceWorker from './registerServiceWorker';
import News from './containers/Drawer/MiscButton/News'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();