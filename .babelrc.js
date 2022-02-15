module.exports = {
  presets: ['@babel/preset-env'], //일일히 따로 명시해야하는 자바스크립트 기능을 한번에 지원해줌
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}