const path = require('path');

module.exports = {
  entry: {
			App: "./app/assets/scripts/App.js"
		 },
  output: {
    path: path.resolve(__dirname, 'app/temp/scripts'),
    filename: '[name].js'
  }
}
