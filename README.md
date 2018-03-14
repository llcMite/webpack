webpack

一、如何使用

npm install
npm run dev
npm run build

二、已经完成的配置

1、webpack-dev-server 热更新
2、编译LESS、es6
3、打包自动追加文件版本号(hash)
4、html自定义模板
5、抽离、压缩CSS
6、压缩、提取JS
7、vendors(提取第三方JS库或者公用代码，如JQ、手淘lib-flexible)
这样每次逻辑代码更新，第三方库的版本不会更新可以缓存(提高性能)

三、文件目录介绍

webpack.confog.js  用于打包的配置文件
webpack.dev.js     用于开发的配置文件
.gitignore：github提交的时候想要忽略提交的配置
package.json：项目所需要的依赖包以及配置说明。
index.html模板样式，最终会自动添加到指定目录内