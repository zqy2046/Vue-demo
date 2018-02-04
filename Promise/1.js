//传统异步解决方案,回调函数;回调地狱;
//回调函数,将后续逻辑传入当前要做的事 事后调用此函数;
/*
let a = ''
function buy(fn) {
  setTimeout(() =>{
    a = '蘑菇'
    fn(a)
  },2000)
}
buy(cookie);
function cookie(a) {
  console.log(a);
}
* */
//Promise可以很好的解决回调问题;
//Promise是一个构造函数;
//参数是一个函数;函数有两个参数;resolve(),reject(),
//promise三个状态,成功 失败 等待;
//promise实例上有then方法;

// let p = new Promise((resolve,reject) => {
//    setTimeout(function() {
//      let a = "白菜"
//      reject(a);
//    },2000)
// })
// p.then((data) =>{
//   console.log(data);},
//   (err) => {
//     console.log(err);
//   })
// function buyPack() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(Math.random() > 0.5){
//         resolve('买')
//       }else {
//         reject('不买')
//       }
//     },Math.random()*1000)
//   })
// }
// buyPack().then(function(data) {
//   console.log(data);
// },function(data){
//   console.log(data);
// })




func











