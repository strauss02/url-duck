const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// instead of hard-coding our mode ('build', or 'dev') we want to let the 'npm run [script]' decide which mode to activate. so we initialize a const called mode, which will be a string set according to what the npm script will decide.
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

// we put it all in exports, as opposed to making a 'configure' object and then exporting it.
module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  // in mode, we set our mode.
  mode: mode,

  // we tell webpack where to start looking for files
  entry: './src/index.js',
  // we tell webpack where to output the bundled files.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  // here, we ask webpack to export a source map, which allows us to know which code came from where, so: good for debugging.
  devtool: 'source-map',
  // here, we declare configuration for a certain module - so, a certain file, or files.
  module: {
    // here, we start telling webpack what are the rules for this module.
    rules: [
      {
        // this tells webpack how to recognize the files wer'e talking about - a regex that test the file name.
        test: /\.js$/,
        // of all the files it would recognize, we tell webpack to exclude these specific files or folders:
        exclude: /node_modules/,
        // here, we tell webpack which loaders to use to compile this module.
        use: {
          // without additional s ttings, this will reference .bablrc
          loader: 'babel-loader',
        },
      },
      // if we want to add different loaders for other file types, we just add another entry to the 'rules' array
      {
        test: /\.(sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  devServer: {
    liveReload: true,
    watchFiles: ['src/*'],
    hot: true,
  },
}
