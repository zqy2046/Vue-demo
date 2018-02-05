## 框架与库的区别;
-   框架 vue 拥有完整的解决方案;
-   库 用他的方法;

##  渐进式 (渐进增强);
-   vue全家桶 vue.js + vue-router + vuex + axios;
-   通过组合完成一个完整的框架

##  vue 特点;
-   核心值关注视图层
-   适用于移动端
-   轻量 灵活
-   渐进式框架

##  渐进式的理解;
-   申明式渲染
-   组件系统
-   客户端路由(vue-router)
-   大规模状态管理(vuex)
-   构建工具(vue-cli)

##  vue的两大核心;
-   响应的数据变化;
-   组合的视图组件

## MVVM模式(angular,vue)
-   model 
-   view
-   viewModel

##  Object.defineProperty(ES5)
-   不支持IE8 及以下; 

##  安装 vue
-   cdn 的方式
-   npm 安装;

```
npm init  
```
-   初始化;生成package.json文件,显示当前项目的配置;初始化的时候项目名称不能有大写,中文;
-   vue

## 指令;

-   类似DOM上的行间属性,vue给这类属性赋予了一定的意义 来实现特殊的功能;所有指令都以 'v-' 开头;内置指令,自定义指令; 

## 基础指令;
-   v-text
    
    和{{}}等价,但是可以防止{{}}出现在页面上;
    
-   v-once 
    
    值绑定一次,当数据再次改变时,视图不再改变;

-  v-html
    
    将html字符串当做html渲染;一定是可信任的html;
  
-  v-model 
    
    双向数据绑定;
    绑定多个checkbox的时候,需要增加value值,并且数据类型是数组;

-  v-for 
    
    循环,复用原有结构,循环字符串,数字,对象,数组;
    
-   v-bind 
    
    动态绑定数据;
    
    
##修饰符;