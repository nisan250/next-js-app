const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

const isProd = process.env.NODE_ENV === 'production';

module.exports= withCSS(
    withImages(
        {
            assetPrefix: isProd ? 'http://d30k733rzexkhf.cloudfront.net' : '',
            inlineImageLimit: 16384,
        }
    )
); 