const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const domain = process.env.PROD_DOMAIN;

const prodConfig = {
  mode: "production",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = prodConfig
