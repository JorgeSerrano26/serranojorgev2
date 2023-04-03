/** @type {import('next').NextConfig} */
const { resolve, join } = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            join(__dirname, 'styles'),
            join(__dirname, 'components/*/*.scss'),
        ],
    },
    webpack: {
        resolve: {
            alias: {
                '@components': resolve(__dirname, 'components'),
                '@config': resolve(__dirname, 'config'),
                '@hooks': resolve(__dirname, 'hooks'),
                '@utils': resolve(__dirname, 'utils'),
            },
        },
    },
};