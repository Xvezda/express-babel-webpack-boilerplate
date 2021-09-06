const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const path = require('path');
const app = express();

const root = path.join(__dirname, '..', '..');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(root, 'dist')));
} else {
  const compiler = webpack(require(path.join(root, 'webpack.config.js')));
  app.use(webpackDevMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'dist', 'index.html'));
});

if (require.main === module) {
  app.listen(3000, () => console.log(`listening @${3000}`));
}

module.exports = app;