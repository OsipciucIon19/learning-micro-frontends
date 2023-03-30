const {merge} = require("webpack-merge");
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
