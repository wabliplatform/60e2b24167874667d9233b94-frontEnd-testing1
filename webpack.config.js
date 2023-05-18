const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'addPost' : './javascript/addPost.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};