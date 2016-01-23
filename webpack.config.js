module.exports = {
	devtool: 'eval-source-map',
	entry : {
		main: [
			'./src/main.js'
		]
	},
	output : {
		filename: 'public/main.js'
	},
	"module" : {
		"loaders" : [
			{
				"test": /\.jsx?/,
				"exclude": /node_modules/,
				loader: 'babel',
				query: {
        			presets: ['es2015', 'react']
      			}				
			}
		]
	}
}