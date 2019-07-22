module.exports = {
  outputDir: 'dist',
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  filenameHashing: false,
  pages: {
    main: {
      entry: 'src/main.js',
      filename: 'index.html'
    },
    projekat1: {
      entry: 'src/bundle/bundleProjekat1.js',
      filename: 'projekat1.html'
    }
  }
}
