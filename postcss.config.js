module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 3.75,
      propList: ['*'],
      exclude: /node_modules/,
    }),
  ],
}
