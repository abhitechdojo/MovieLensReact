import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			messages : [{id: 1, text: 'Hi'}, {id: 2, text: 'Hello'}, {id: 3, text: 'World'}]
		};
	}

	render() {
		var messageNodes = this.state.messages.map((message) => {
			return (<div key={message.id}>{message.text}</div>);
		});
		return (<div>{messageNodes}</div>);
	}
}

export default App;