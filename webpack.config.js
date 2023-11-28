const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/ardee-bootstrap-hexa')
  .setPublicPath('/ardee-bootstrap-hexa')
  .addEntry('ardee-bootstrap-hexa', './themes/SyliusDemoFrontendHexa/assets/app.js')
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.name = 'ardeeBootstrapHexa';

module.exports = config;
