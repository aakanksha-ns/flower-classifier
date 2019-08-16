import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FlowerClassifier from './components/FlowerClassifier';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FlowerClassifier />, document.getElementById('root'));

serviceWorker.unregister();
