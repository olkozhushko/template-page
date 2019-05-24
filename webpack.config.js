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
    removeEmptyElements: true
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
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ["file-loader"]
  },
  {
    test: /\.(html)$/,
    use: ["html-loader"]
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/"
        }
      }
    ]
  }
]
}
};
