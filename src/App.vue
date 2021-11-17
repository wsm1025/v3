<template>
  <div>app</div>
  <input type="text" v-model="keyword">
  <p>{{keyword}}</p>
</template>

<script>
import {customRef,ref,isRef} from 'vue'
function useDeboncsREf(value,time){
  return customRef((track,tigger)=>{
  let timeId;
    return{
      //返回数据
      get(){
        track()
        return value
        //告诉vue去追踪数据
      },
      //设置数据
      set(newVal){
        //开启定时器
        clearTimeout(timeId)
        timeId = setTimeout(() => {
          value = newVal
          //告诉vue更新数据
          tigger()
        }, time);
      }
    }
  })
}
export default {
  setup() {
    // const keyword = ref('abc')
    //自定义hook防抖函数
    const keyword = useDeboncsREf('abc',500)
    console.log(isRef(ref()));
    return {
      keyword
    };
    // provide和inject提供依赖注入，功能类似 2.x 的provide/inject
    // 实现跨层级组件(祖孙)间通信

    // 响应式数据的判断
    // isRef: 检查一个值是否为一个 ref 对象
    // isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
    // isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
    // isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
  },
};
</script>

<style lang="scss" scoped>
</style>