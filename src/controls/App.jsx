import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

injectTapEventPlugin();

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			messages : [{id: 1, text: 'Hi'}, {id: 2, text: 'Hello'}, {id: 3, text: 'World'}, {id: 4, text: 'test'}]
		};
	}

    getChildContext() {
        return {
            stores: this.props.stores,
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

	componentWillMount() {
		ThemeManager.setPalette({
			primary1Color: Colors.blue500
		});		
	}

	render() {
		var messageNodes = this.state.messages.map((message) => {
			return (<div key={message.id}>{message.text}</div>);
		});
		return (<div>{messageNodes}</div>);
	}
}

App.childContextTypes = {
    stores: React.PropTypes.object,
    muiTheme: React.PropTypes.object
};

export default App;