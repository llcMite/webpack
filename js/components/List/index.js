import React,{Component} from 'react';

class List extends Component{
	render(){
		return (<div>
			<h1>list</h1>
			<p>下面是子组件</p>
			{this.props.children}
		</div>)
	}
}

export default List;