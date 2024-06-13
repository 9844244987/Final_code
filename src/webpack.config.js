const webpack = require('webpack');

module.exports = {
  // Your existing configuration
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
