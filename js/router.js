import React from 'react';
import {browserHistory,hashHistory, Router, Route, IndexRoute} from 'react-router';
import Index from './components/Index';
import List from './components/List';
import User from './components/User';
import Detail from './components/List/detail';
//Browser history 是使用 React Router 的应用推荐的 history。
//它使用浏览器中的 History API 用于处理 URL，创建一个像example.com/some/path这样真实的 URL 。
//Hash history 使用 URL 中的 hash（#）部分去创建形如 example.com/#/some/path 的路由
console.log(List,User)
export default ()=>{
	return (
		<Router history={hashHistory}>
			<Route path='/' component={Index}/>   
			<Route path='/list' component={List}>
			  <Route path='detail' component={Detail}/>
			</Route>
			<Route path='/user' component={User}/>
		</Router>)
}

//路由跳转方法
//hashHistory.push('/list')
//this.context.router.push('/list')
