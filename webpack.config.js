const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'create' : './javascript/create.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};