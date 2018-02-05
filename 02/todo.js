/*功能:
* 将数据循环到页面中
* 敲回车添加事件
* 事件删除,修改功能
* 计算当前事件完成情况
*
* */
let vm = new Vue({
  el: '#root',
  data: {
    todos: [
      {isCompleted: false, title: '吃饭'},
      {isCompleted: false, title: '吃饭'},
    ],
    title: '',
    cur: '',
    hash: '',
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;
    //监控hash值得变化;如果页面已经有hash,但刷新页面时,也要获取;
    this.hash = window.location.hash.slice(2) || 'all'
    window.addEventListener('hashchange', ()=>{
      this.hash = window.location.hash.slice(2);
    },false)
  },
  methods: {
    addTodo() {
      if (!this.title) return;
      this.todos.push({isCompleted: false, title: this.title});
      this.title = '';
    },
    remove(todo) {
      this.todos = this.todos.filter(item => {
        return item !== todo;
      })
    },
    remember(todo) {
      this.cur = todo;
    },
    cancel() {
      this.cur = '';
    }
  },
  computed: {
    count() {
      return this.todos.filter(item => {
        return !item.isCompleted
      }).length;
    },
    filterTodos() {
      if(this.hash==='all') {
        return this.todos
      }
      if(this.hash ==='unfinish') {
        return this.todos.filter(item=>{
          return !item.isCompleted;
        })
      }
      if(this.hash==='finish') {
        return this.todos.filter(item=>{
          return item.isCompleted
        })
      }
      return this.todos;
    }
  },
  directives: {
    focus(el, bindings) {
      if (bindings.value) el.focus()
    }
  },
  watch: {
    todos: {
      deep:true,
      handler() {
        localStorage.setItem('data',JSON.stringify(this.todos));
      }
    }
  }
})