const path = require('path');

module.exports = {
  entry: './src/index.js',  // Adjust the entry point to your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')  // Adjust the output directory as needed
  },
  mode: 'production'  // or 'development' depending on your needs
};
