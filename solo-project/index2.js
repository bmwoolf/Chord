import React from 'react';
import { render } from 'react-dom';
import './styles.css';
import Homepage from './client/Homepage/Homepage';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


render(
    <Homepage />,
    document.getElementById('homepage')
);

