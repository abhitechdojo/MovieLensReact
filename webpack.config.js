module.exports = {
	entry : {
		main: [
			'script1.js', 'script2.js'
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
        			presets: ['es2015']
      			}				
			}
		]
	},
    resolve: {
        extensions: ['', '.js', '.jsx']
    }	
}