// next.config.js
//eslint-ignore-file
const withLess = require('@zeit/next-less')
module.exports = withLess({
  env: {
    MAP_KEY: process.env.MAP_KEY
  }
});
