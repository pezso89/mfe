// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

const isProduction = process.env.NODE_ENV === "production";
const domain = process.env.PROD_DOMAIN ?? "localhost";

/** @type {import("webpack").Configuration} */
const config = {
  entry: "./src/index.ts",
  devServer: {
    static: "./dist",
    hot: true,
    historyApiFallback: true,
    port: 8081,
    open: true,
  },
  devtool: "source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/App",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.output = {
      filename: "[name].[contenthash].js",
      publicPath: `/marketing/latest/`,
      clean: true
    };
    config.plugins = [
      new ModuleFederationPlugin({
        name: "container",
        exposes: {
          "./MarketingApp": "./src/App",
        }
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ];
  } else {
    config.mode = "development";
  }
  return config;
};
