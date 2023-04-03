/** @type {import('next').NextConfig} */
const path = require('path');
const { resolve } = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'styles'),
            path.join(__dirname, 'components/*/*.scss'),
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
