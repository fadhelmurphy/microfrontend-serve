const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');
const path = require('path');


const domain = process.env.PRODUCTION_DOMAIN || "https://module-federation.herokuapp.com/";

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                ReactApp: `ReactApp@${domain}/ReactApp/remoteEntry.js`,
                VueApp: `VueApp@${domain}/VueApp/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)