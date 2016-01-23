import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			messages : [{id: 1, text: 'HI'}, {id: 2, text: 'Hello'}]
		};
	}

	render() {
		var messageNodes = this.state.messages.map((message) => {
			return (<div key={message.id}>{message.text}</div>);
		});
		debugger;
		return (<div>{messageNodes}</div>);
	}
}

export default App;