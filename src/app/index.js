import React from "react";
import ReactDOM from "react-dom";

//Everything is a component in react unlike element in html
//Layout Component
class Layout extends React.Component{
	render(){
		//JSX part wrapped in paranthese will convert html to js created element
		//var div1 = document.createElement('div');
		//div1.innerHTML = "Hello";
		//so jsx will transpile to above
		return(
			<h1>How is it going</h1>
		);
	}
}

const app = document.getElementById('app');
//get the app element from DOM
//get the layout component
//render layout component into the app
ReactDOM.render(<Layout/>,app);