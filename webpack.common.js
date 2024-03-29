const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve('./dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				// exclude: ['node_modules'],
				use: [{ loader: 'babel-loader' }],
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}],
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin(),
	]
}
