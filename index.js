import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './css/style.css';
import './css/style.less';
import Router from './js/router'

ReactDom.render(
  <Router/>,
  document.getElementById('example')
);

