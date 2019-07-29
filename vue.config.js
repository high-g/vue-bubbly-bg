module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-geometry-bg/'
    : '/',
  outputDir: 'docs'
}