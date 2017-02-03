import React from 'react';
import {getFunName} from '../helpers';


class StorePicker extends React.Component {

	//constructor() {
	//	super();
	//	this.goToStore = this.goToStore.bind(this);
	//}

	goToStore(event) {
		event.preventDefault();
		console.log("You changed the URL");
		// First get text
		console.log(this.storeInput.value);	
		// then transition
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render () {
		// You can do normal comments anywhere else 

		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}> 
			{/* This is a JSX comment put it inside the form tag or else */}
			<h2>Please Enter A Store</h2>
			<input type="text" required placeholder="Store Name"
				defaultValue={getFunName()} ref={(input)=> {this.storeInput=input}} />
			<button type="submit">Visit Store </button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;