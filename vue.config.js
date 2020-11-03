module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/'
}
