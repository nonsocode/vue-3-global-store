const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env = {}) => ({
  mode: env.prod ? "production" : "development",
  entry: [
    require.resolve(`webpack-dev-server/client`),
    path.resolve(__dirname, "./src/main.js")
  ].filter(Boolean),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: "minimal",
    contentBase: __dirname,
    overlay: true,
    injectClient: false,
    disableHostCheck: true
  }
});
