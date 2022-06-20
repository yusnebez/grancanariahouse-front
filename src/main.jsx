/*import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)*/

import React from 'react'
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);