const path = require("path");
const webpack = require("webpack");

module.exports = {
//tells our webpack where our application starts and where to start bundling files
  entry: './client/index.js',
  mode: process.env.NODE_ENV,
//module object helps define how our exported js modules are transformed and which ones are included according to the 'array of rules' on the object
  module: {
    rules: [
      {
//test and exlude keys are conditions to match files against when transforming es6 and jsx syntax
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
//processing css
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
//allows us to specify which extensions webpack will resolve--this allows us to import modules without needing to add their extensions
  resolve: { extensions: ["*", ".js", ".jsx"] },
//output: tells webpack where to output the bundles, assets 
//an object holding thepath where our bundles and assets as well as the name and entries it will adopt
  output: {
    // path: path.resolve(__dirname, "dist/"),
    // publicPath: "/dist/",
    path: path.resolve(__dirname, "Reactide/"),
    publicPath: path.resolve(__dirname, '/Reactide/'),
    filename: "bundle.js"
  },
//location were serving static files from
//spins up an express server under the hood and uses web sockets to find changes when they are made, and apply them to the browser accordingly
  devServer: {
    // contentBase: path.join(__dirname, "public/"),
    publicPath: path.resolve(__dirname, '/Reactide/'),
    port: 8085,
    proxy: {
      '/api': 'http://localhost:3000'
    },
//********//hot Only true and plugin does not always work, refer to article--when removing these two configs, can still live reload
    hot: true
  },
//this plugin is an array that allows us to see our changes without refreshing
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
// devServer: {
//   publicPath: path.resolve(__dirname, '/build/'),
//   port: 8085,
//   hot: true,
// },
// plugins: [
//   new webpack.HotModuleReplacementPlugin(),
// ],
// // mode: 'development',
// }