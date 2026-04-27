const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package.json");

const devConfig = {
  entry: "./src/index.ts",
  output: {
    publicPath: "http://localhost:8080/",
  },
  mode: "development",
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
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
        auth: "auth@http://localhost:8082/remoteEntry.js",
      },
      exposes: {
        "./hooks/useStore": "./src/hooks/useStore.ts",
        "./hooks/useStoreSelector": "./src/hooks/useStoreSelector.ts",
        "./providers/StoreProvider": "./src/providers/StoreProvider.tsx",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = devConfig
