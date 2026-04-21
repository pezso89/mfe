// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const packageJson = require("./package.json");

const isProduction = process.env.NODE_ENV === "production";

const domain = process.env.PROD_DOMAIN ?? "localhost";

/** @type {import("webpack").Configuration} */
const config = {
  entry: "./src/index.ts",
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
  },
  devtool: "source-map",
  plugins: [
    new ExternalTemplateRemotesPlugin(),
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
      publicPath: "/container/latest/",
    };
    config.plugins = [
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          marketing: `marketing@https://d3d57pm3dn7wc5.cloudfront.net/marketing/latest/remoteEntry.js`,
        },
      }),
    ];
  } else {
    config.mode = "development";
    config.plugins = [
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
                    marketing: `marketing@https://d3d57pm3dn7wc5.cloudfront.net/marketing/latest/remoteEntry.js`,

        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ];
  }
  return config;
};
