<template>
  <!-- {{ state }} -->
  <!-- {{ rex.job }} -->
  {{ rex.job.money }}
  {{ rex.job.name }}
  <Child ref="child" :msg="msg" msg1="小垃圾" @msg="msgAction" />
  {{ rex.sex }}
  <button @click="change">点击</button>
  <button @click="getCHild">点击getCHild</button>
  计算属性：<input type="text" v-model="full" />
  msg:<input type="text" v-model="msg">
</template>

<script>
import { computed, reactive, ref, watch,watchEffect } from "vue";
import Child from "./components/Child.vue";
export default {
  // setup(props, context) / setup(props, {attrs, slots, emit})
  setup() {
    // setup在beforeCreate生命周期会回调之前就执行了，而且只执行一次
    // setup 组件并未创建出来，意味着：this无效（undefined）
    // 返回值为一个对象，返回内容可以在模版中使用。若有data返回的，也可在模板中使用，且两者会合并
    // setup返回的值优先级高于data返回的值
    // 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
    // setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据

    // reactive与ref-细节
    // 是Vue3的 composition API中2个最重要的响应式API
    // ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
    // 如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
    // ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
    // reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
    // ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)

    //computed
    const full = computed({
      get(){
      return  rex.job.money +'-'+ rex.job.name
      //此处只有getter方法
      },
      set(val){
        const newVal = val.split('-');
        // console.log(newVal);
        rex.job.money = newVal[0]
        rex.job.name = newVal[1]
        // console.log(rex);
      }
    });
   
    const state = ref(0);
    const child = ref(null);
    function change() {
      // axios("https://v1.hitokoto.cn/").then((res) => {
      //   state.value = res.data.hitokoto;
      // });
      rex.sex = "Man";
      delete rex.name;
    }
    var obj = {
      name: "wsm",
      job: {
        name: "前端开发",
        money: "18k",
        address: "绿城",
      },
    };
    const rex = reactive(obj);
    const msg = ref("我喜欢你啊");
    function msgAction() {
      msg.value += "j";
    }
    function getCHild() {
      console.log(child.value);
    }
     watch(msg,val=>{
       console.log(val);
    },{immediate:true,deep:true})
    watchEffect(()=>{
      console.log(new Date());
    })
    return {
      state,
      change,
      rex,
      msg,
      msgAction,
      child,
      getCHild,
      full,
    };
  },
  components: {
    Child,
  },
};
</script>

<style lang="scss" scoped>
</style>