const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  // outputDir: 'dist',        //  打包后的文件夹名称，默认dist
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#4353FF',     // 全局主色
          // 'success-color': '#28CA42',     // 成功色
          // 'error-color': '#FC5050',       // 错误色
        },
        javascriptEnabled: true
      }
    }
  },

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))

    // 自定义 SVG 图标：通过配置 vue-svg-loader 来将 svg 图标作为 Vue 组件导入
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/_base.less'),
        path.resolve(__dirname, './src/assets/styles/_mixin.less'),
        path.resolve(__dirname, './src/assets/styles/_variable.less'),
      ],
    })
}