import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Colors from 'material-ui/lib/styles/colors';
import MyTheme from './theme.js';
import DimensionPicker from "./DimensionPicker.jsx"

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
            muiTheme: ThemeManager.getMuiTheme(MyTheme)
        };
    }

	componentWillMount() {
		let newMuiTheme = this.state.muiTheme;
		this.setState({
			muiTheme: newMuiTheme,
		});		
	}

	render() {

		var messageNodes = this.state.messages.map((message) => {
			return (<div key={message.id}>{message.text}</div>);
		});

		return (
			<div>
				<div>
					<DimensionPicker dimension="occupation"/>
				</div>
				<div>
					<DimensionPicker dimension="genre"/>
				</div>
				<div>
					<DimensionPicker dimension="gender"/>
				</div>
				<div>
					{messageNodes}
				</div>
			</div>
		);
	}
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;