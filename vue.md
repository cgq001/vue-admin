## 1.全局配置
### 1.取消Vue 所有的日志与警告
```javascript
Vue.config.silent = true
```
### 2.是否允许 vue-devtools 检查代码
在Vue 加载后 同步执行代码
```javascript
Vue.config.devtools = true

```
### 3.是否允许阻止 vue 在启动时生成生产提示
在Vue 加载后 同步执行代码
```javascript
Vue.config.productionTip = true

```
## 2.全局API
### 2.1 全局注册指令
```javascript
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})
```
### 2.2 全局注册过滤器
```javascript
Vue.filter('my-filter', function (value) {
  // 返回处理后的值
})
```
## 3.选项
### 1.props
```javascript
props:{
    type: Number , // 可选值: String、Number、Boolean、Array、Object、Date、Function、Symbol
    default: 0 // 默认值
    required: true // 是否必须
    validator: function (value) {  // 自定义的验证规则
        return value >= 0
      }
}
```
### 2.computed
官网示例:
```javascript
var vm = new Vue({
  data: { a: 1 },
  computed: {
    // 仅读取
    aDouble: function () {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  }
})
vm.aPlus   // => 2
vm.aPlus = 3
vm.a       // => 2
vm.aDouble // => 4
```
## 4.生命周期
### 1.beforeCreate
实例初始化之后,数据 和方法 观察者 还没有挂载之前
### 2.created
实例创建完成,此时可以拿到 数据data  方法 监听 观察者等 但DOM还没有开始挂载
### 3.beforeMount
DOM被挂载之前,此事为虚拟DOM,render函数被首次调用
(服务端渲染期间不会被调用)
### 4.mounted
DOM被挂载完成,但此时不能保证所有的子组件都已经被挂载.
```javascript
mounted: function () {
  this.$nextTick(function () {
    //  在这里才算真正的挂载完成
    //  将回调延迟到下次 DOM 更新循环之后执行
  })
}
```
### 5.beforeUpdate
此时数据已经更新,虚拟DOM打补丁之前.还能访问到上次的真实DOM
### 6.updated
补丁结束,组件DOM已经更新,然后和mounted一样,操作DOM建议在Vm.$nextTick内
### 7.beforeDestroy
实例销毁前调用,此时仍然可以访问到Vue实例
### 8.destroyed
实例彻底销毁
### 9.errorCaptured 
2.5.0 新增
当捕获一个来自子孙组件的错误信息时被调用
## 5.组合
### 1.provide / inject 隔代传值
```javascript
// 父

export default {
    provide: {
        foo: 'bar',
        parent: this // 可以传值父组件实例
    },
}

// 子孙
export default {
    inject: ['foo'],  // 结束祖先元素传递的值
    inject: {         // 2.5.0之后  其传值变成 可选项
        foo: { default: 'foo' }
    }
}

```
## 6.实例
### 1.$parent
父实例
### 2.$root
根实例
### 3.$children
子实例
### 4.$attrs
父实例所绑定的 未通过props 传递的属性 (class 和 style 除外)
```javascript
 console.log(this.$attrs) // 拿到父组件属性上的值 {name: "这是标题", height: "80" }
 
```
### 5.$listeners
包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用
```javascript
// 父组件
<home @change="change"/>

// 子组件
mounted() {
  console.log(this.$listeners) //即可拿到 change 事件
}

```

## 7.指令
### v-on修饰符
```javascript
.stop - 调用 event.stopPropagation()。
.prevent - 调用 event.preventDefault()。
.capture - 添加事件侦听器时使用 capture 模式。
.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
.native - 监听组件根元素的原生事件。
.once - 只触发一次回调。
.left -  只当点击鼠标左键时触发。
.right -  只当点击鼠标右键时触发。
.middle -  只当点击鼠标中键时触发。
.passive -  以 { passive: true } 模式添加侦听器
```
## keep-alive
### 1.属性
include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
max - 数字。最多可以缓存多少组件实例
### 2.生命周期
activated  
deactivated

[以下内容来自大神火狼的总结](https://juejin.im/post/5d9d386fe51d45784d3f8637)

>一个组件是动态路由切换的时候,并不会执行组件的created 和 mounted 钩子
```html
<!-- 可以通过在 router-view 上绑定一个动态的key 来解决这个问题 -->
<router-view :key="动态值"></router-view>
```
## img 加载失败
当图片加载失败时的处理
```
<img :src="imgUrl" @error="handleError" alt="">
<script>
export default{
  data(){
    return{
      imgUrl:''
    }
  },
  methods:{
    handleError(e){
      e.target.src=reqiure('图片路径') 
    }
  }
}
</script>
```
## CSS deep 属性
```css 
<style scoped>
  .demo{
    font-size: 14px;
  }
  /* 这里的 .content 将实现 .demp 下的全局作用 */
  .demo /deep/ .content{  
    color: blue;
  }
</style>
```
