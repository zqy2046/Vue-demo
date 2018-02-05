###指令
- v-model,(如果是checkbox,select多选是数组,提供一个value属性)(radio,checkbox分组靠 v-model)
-   修饰符 .number .lazy
-   按键修饰符 .ener .ctral .keyCode
-   事件
   
    -   事件.stop
    ```
        storpropagation,cancelBubble = true;
        
    ```
    -   事件.capture
    ```
    addEventListener(,,true)
    ```
    -   事件.prevent
    ```
    e.prventDefault()
    ```
    -   事件.once
    ```
    
    ```
    -   事件.self
    ```
    e.srcElement && e.target;
    ```

-   jQuery once
-   e.srcElement && e.target;


##全局 filters 过滤;
```
    filters:{
        (){}
    }
```

##  computed 计算属性, 不是方法;

-   方法不会有缓存,computed会根据依赖(归Vue管理的数据,可以响应式变化的属性进行缓存);
-   两部分组成 : get和set,(可以只写get,不能单独写set),一般通过js赋值影响其他人或者表单设置值得时候回调用set方法;




















