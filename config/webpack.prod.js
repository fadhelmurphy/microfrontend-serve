const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN || "https://module-federation.herokuapp.com/";

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/public'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                ReactApp: `ReactApp@${domain}/public/ReactApp/remoteEntry.js`,
                VueApp: `VueApp@${domain}/public/VueApp/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)