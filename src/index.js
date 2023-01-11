import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App.jsx';
import './styles/global.scss';

const getRoot = document.getElementById('root');
const root = ReactDOM.createRoot(getRoot);

root.render(
    <App/>
)