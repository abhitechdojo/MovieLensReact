var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry : {
		main: [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/ony-dev-server',
			'./src/main.js'
		]
	},
	output : {
		filename: 'public/[name].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	"module" : {
		"loaders" : [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'src'),
				loader: 'react-hot!babel',
				query: {
        			presets: ['es2015', 'react']
      			}				
			}
		]
	}
}