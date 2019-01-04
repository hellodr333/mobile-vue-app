# mobile-vue-app
vue + eventbus 组件之间通信 + i18n  + history模式路由


### yarn  install
### yarn  serve

技术栈
vue-cli 3

eventbus 实现组件之间的通信

history模式的路由 

i18n 插件实现 语言的切换


## 移动端与 pc 端后台架构的特点比较
1.路由模式的选择： history  与 hash 的比较
  不同于 pc 端，移动端使用 history 模式的路由兼容性更好，移动端可以根据页面来划分模块，但是 pc 端倾向于不同的模块来划分组件，同样也是影响到项目的目录结构，文件位置的摆放
  
2.组件之间通信方式的选择
   在状态少和数据少的情况使用 eventbus 来实现不同组件之间的通信，父子组件的通信仍然可以使用 props 属性的传递来实现通信，页面（路由）之间的跳转可以使用path 后面带 query或者params 参数来实现， pc端 在涉及比较复杂的状态管理时可以选择 vuex 插件。
 


