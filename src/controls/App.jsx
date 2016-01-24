import React from 'react';
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = new mui.Styles.Colors;

class App extends React.Component {
	constructor() {
		super();
		ThemeManager.setPalette({
			primary1Color: Colors.blue500,
			primary2Color: Colors.blue700,
			primary3Color: Colors.blue100,
			accent1Colors: Colors.pink400
		});
		this.state = {
			messages : [{id: 1, text: 'Hi'}, {id: 2, text: 'Hello'}, {id: 3, text: 'World'}, {id: 4, text: 'test'}]
		};
	}

	static childContextTypes = {
		muiTheme: React.PropTypes.object
	};

	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
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