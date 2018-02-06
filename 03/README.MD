##  生命周期,钩子函数

-   beforeCreate    created     获取数据,数据初始化阶段;
-   beforeMount     mounted     操作DOM;
-   beforeUpdate    updated     页面依赖的数据更新时触发(一般用watch替换掉了,更精确);
-   beforeDestroy   destroy     可以清楚定时器和事件绑定;

##  组件化开发;
-   页面组件
-   基础组件

### 组件化开发的优点:
-   提高开发效率
-   方便重用
-   便于协同开发
-   易于管理与维护

### 全局组件:   
```
Vue.component('componentName',{options})
```
声明一次,随处可用,
### 局部组件:   
需要声明组件挂载到哪里;
-   创建组件
-   注册组件
-   引用组件
## slot插槽;
-   模板定制
## 路由
-   访问不同的路由,可以返回不同的结果;
##  单页面应用(SPA)
    single-page-Web-application
##  前后端分离

-   后端只负责提供数据接口,不在提供页面,
-   hash不利于SEO,上线的时候采用H5跳转;
     
##  编程式导航
-   每个组件上都有个$router属性,$route属性;
-   如果通过对象给路由to的参数,必须通过给路由起名,通过name跳转;
-   路径参数发生变化,监控参数的变化发送aJax;

```
   $router.push(路径)
   $route.params
   watch:{
        $route(){}
   }
```
##  嵌套路由
```
    children:[
        {path:'',component:}//路径不要带 '/'
    ]
```

##  keep-alive

