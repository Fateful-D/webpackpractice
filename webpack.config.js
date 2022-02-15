const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// export
module.exports = {
  //파일 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',
  // 결과물 (번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    // default 설정
    clean: true
  },

  module: {
    rules: [
      {
      test: /\.s?css$/,
      use: [
        'style-loader', // html에 스타일 태그 삽입
        'css-loader', // 자바스크립트가 css 해석하는 용도
        'postcss-loader', //공급업체 접두사 적용
        'sass-loader' //해석
      ]
    },
    {
      test: /\.js$/,
      use: [
        'babel-loader'
      ]
    }
  ]
},

  //번들링 후 결과물의 결과 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    }),
    new FaviconsWebpackPlugin('./static/favicon.ico')
  ],

  devServer: {
    host: 'localhost'
  }
}
// 두 번들러 정체성이 달라서 1대1 대응 ㄴㄴ
// resolve() 첫번째 인수와 두번쨰 인수에 있는 경로를 합쳐준다
//__dirname 전역변수 -현재 파일이 있는 경로 -절대적인 경로 path에 제공.