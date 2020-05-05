import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  
  //2.根据组件构造器，new一个组件对象
  const toast = new toastConstructor()

  //3.将组件对象挂载到某一元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  //5.赋给Vue的原型
  Vue.prototype.$toast = toast
}

export default obj