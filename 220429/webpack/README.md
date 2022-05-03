## Bundler

## part 8 Ch 2

## Webpack

### 설치하기

`npm i -D webpack webpack-cli webpack-dev-server@next`

```json
"scripts": {
  "dev": "webpack-dev-server --mode development",
  "build": "webpack --mode production"
  }
// 변경
```

`webpack.config.js` file 생성

### entry, output

```js
// import
const path = require("path");

// export
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true,
  },
};
```

> https://webpack.js.org/

### plugins

`npm i -D html-webpack-plugin` 설치

```json
// webpack 추가 지정
// 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
Plugin: [
    new HtmlPlugin({
      template: "./220429/part8/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
  },
```

### 정적, 파일 연결

`npm i -D copy-webpack-plugin`

### module

`npm i -D css-loader style-loader`

### SCSS

`npm i -D sass-loader sass`

### Autoprefixer(PostCSS)

```js
//.postcss.js file 생성후
module.exports = {
  Plugin: [require("autoprefixer")],
};
```

### babel

`npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime`
`.babelrc.js` 파일 생성

```js
module.exports = {
  presets: ["@babel/presets-env"],
  plugins: [["@babel/plugin-transform-runtime"]],
};
```

`npm i -D babel-loader`
