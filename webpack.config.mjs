const path = require('path');

module.exports = {
  // Set mode explicitly
  mode: 'development',
  
  // Entry point for your application
  entry: './src/index.js',
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
  },
  
  // Add module rules for loaders
  module: {
    rules: [
      {


        
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  
  // Resolve extensions for imports
  resolve: {
    extensions: ['.js', '.jsx']
  }
};