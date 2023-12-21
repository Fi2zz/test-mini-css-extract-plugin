const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const stylesHandler = MiniCssExtractPlugin.loader;
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [{ test: /\.css$/i, use: [stylesHandler, "css-loader"] }],
	},
	mode: "production",
};
