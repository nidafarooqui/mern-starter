mkdir mern-starter

yarn init

git init

create files:
src/app.js
lib/server.js
middleware/
model/
route/
.env
.eslintignore
.eslintrc.json
.gitignore
.babelrc
.prettierrc
webpack.config.js

yarn add express body-parser cors mongoose dotenv nodemon react react-dom webpack webpack-dev-server webpack-cli babel-plugin-transform-object-rest-spread babel-plugin-transform-class-properties babel-plugin-transform-react-jsx

yarn add --dev jest eslint @babel/core @babel/preset-env @babel/preset-react @babel/cli babel-loader style-loader css-loader sass-loader url-loader
eslint eslint-loader babel-eslint eslint-config-react eslint-plugin-react

.env should contain:
PORT=3000
DEBUG=true
API_URL=http://localhost:3000
CORS_ORIGINS=http://localhost:8080
APP_SECRET='something secret'
MONGODB_URI=mongodb://localhost/mern-starter

basic scripts
"scripts": {
"dev": "webpack-dev-server --env.dev --mode development --open",
"build": "webpack --mode production",
"format": "prettier --write \"src/**/\*.js\"",
"eslint-fix": “eslint --fix \"src/**/\*.js\"",
"test": "NODE_ENV=testing jest --forceExit --detectOpenHandles --silent",
"test-routes": "npm run test -t router",
"test-models": "npm run test -t model",
"test-controllers": "npm run test -t controllers",
"test-auth": "npm run test -t Authentication:",
"start": "nodemon --ignore dist src/server/server.js"
},

.babelrc

{
"presets": [
"@babel/preset-env",
"@babel/preset-react"
],
"env": {
"development": {
"plugins": [
"transform-class-properties",
"transform-react-jsx",
"transform-object-rest-spread"
]
}
}
}

.prettierrc
{
"semi": true,
"singleQuote": true,
"trailingComma": "es5"
}

.eslintrc
{
"parser": "babel-eslint",
"extends": "react",
"env": {
"browser": true,
"node": true
},
"settings": {
"react": {
"version": "detect"
}
}
}

webpack.config.js

const path = require('path');

module.exports = {
entry: './src/app.js',
output: {
path: path.join(\_\_dirname, 'public'),
filename: 'bundle.js',
publicPath: '/'
},
module: {
rules: [{
use: ['babel-loader', 'eslint-loader'],
test: /\.jsx?$/,
      exclude: /node_modules/,
      resolve: { 
        extensions: [".jsx", ".js", ".json"] 
      }
    }, {
      test: /\.s?css$/,
use: [ 'style-loader', 'css-loader', 'sass-loader' ]
}, {
test: /\.(png|jpg|gif)\$/i,
use: [
{
loader: 'url-loader',
options: {
limit: 8192
}
}
]
}]
},

devtool: 'cheap-module-eval-source-map',
devServer: {
contentBase: path.join(\_\_dirname, 'public'),
historyApiFallback: true,
port: 4000,
}
};
