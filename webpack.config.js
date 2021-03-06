const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
entry: "./src/main.js",
output: {
path: path.resolve(__dirname, "dist"),
filename: "bundle.js"
// publicPath: path.resolve(__dirname, "dist")
},
devtool: isDevelopment && "inline-source-map",
devServer: {
contentBase: "dist"
},
plugins: [
new CleanWebpackPlugin(),
new MiniCssExtractPlugin({
  filename: "style.css"
}),
new HtmlWebpackPlugin({
  hash: true,
  template: "./src/index.html",
  filename: "index.html", //relative to the root of the application
  minify: !isDevelopment && {
    html5: true,
    collapseWhitespace: true,
    caseSensitive: true,
    removeComments: true,
    removeEmptyElements: false
  } 
})
],
module: {
rules: [
  {
    test: /\.(scss|css)$/,
    use: [
      MiniCssExtractPlugin.loader,
                { loader: "css-loader", options: {} },
                'resolve-url-loader',
                { loader: "postcss-loader", options: {sourceMap: isDevelopment} },
                { loader: "sass-loader", options: {sourceMap: isDevelopment} }
    ]
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      "file-loader",
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false
          },
          pngquant: {
            quality: "65-90",
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        }
      }
    ]
  },
  {
    test: /\.(html)$/,
    use: ["html-loader"]
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=10000&mimetype=image/svg+xml"
  },
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=10000&mimetype=application/font-woff"
  }, {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=10000&mimetype=application/font-woff"
  }, {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=10000&mimetype=application/octet-stream"
  }, {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file-loader"
  }
  
]
}
};
