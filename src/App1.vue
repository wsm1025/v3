<template>
  <div>hello v3</div>
  <!-- <Child v-if="isShow" /> -->
  <!-- <button @click="ShowMethod">点击</button>
  {{ x }},{{ y }}
  <h3 v-if="loading">正在加载中</h3>
  <h3 v-else-if="errorMsg">{{ errorMsg }}</h3>
  <ul v-else>
    {{
      data
    }}
  </ul> -->
  <!-- {{ name }} -->
  <!-- <button @click="updateMethod">更新数据</button><br/>
  m1：{{ m1 }} <br/>
  m2：{{ m2 }} <br/>
  m3：{{ m3 }} <br/>
  m4：{{ m4 }}<br/> -->
  <!-- <button @click="update">Only更新数据</button><br />
  {{ only }} -->
age：{{age}}
money:{{money}}

  {{Refs}}
  <button @click="RefsMethods">点击</button>
</template>

<script>
// import Child from "./components/Child.vue";
import { reactive, ref, toRefs, readonly,toRef } from "vue";
import useMouseHooks from "./hooks/useMouseHooks";
import useRequest from "./hooks/useRequest";
export default {
  // components: {
  //   Child,
  // },
  setup() {
    const { x, y } = useMouseHooks();
    const { loading, data, errorMsg } = useRequest("http://v1.hitokoto.cn");
    let isShow = ref(true);
    // let x = ref(-1);
    // let y = ref(-1);
    const state = reactive({
      name: "wsm",
      age: 23,
    });
    function ShowMethod() {
      isShow.value = false;
    }

    // const ClickMethod = (e) => {
    //   x.value = e.pageX;
    //   y.value = e.pageY;
    // };
    // onMounted(() => {
    //   window.addEventListener("click", ClickMethod);
    // });
    // onBeforeUnmount(() => {
    //   window.removeEventListener("click", ClickMethod);
    // });
    //深度响应式
    // const m1 = reactive({
    //   name: "aaa",
    //   age: 20,
    //   car: { name: "奥利奥" },
    // });
    // //浅度响应式
    // const m2 = shallowReactive({
    //   name: "aaa",
    //   age: 20,
    //   car: { name: "奥利奥" },
    // });
    // //深度响应式
    // const m3 = ref({
    //   name: "aaa",
    //   age: 20,
    //   car: { name: "奥利奥" },
    // });
    // //非响应式
    // const m4 = shallowRef({
    //   name: "aaa",
    //   age: 20,
    //   car: { name: "奥利奥" },
    // });
    // function updateMethod(){
    //   // m4.value.value+='==='
    //   console.log(m3,m4);
    // }
    // const only = reactive({
    //   name: "wsm",
    //   age: 23,
    //   car: {
    //     name: "宝马",
    //     color: "yellow",
    //   },
    // });
    const only = ref({
      name: "wsm",
      age: 23,
      car: {
        name: "宝马",
        color: "yellow",
      },
    });
    //深度只读数据
    // const Only = readonly(only);
    //浅度只读数据
    const Only = readonly(only);
    const update = () => {
      // Set operation on key "name" failed: target is readonly.
      Only.name += "==";
    };
    // toRaw 把代理对象变成普通对象，数据变化，界面变化
    //     toRaw

    //     返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
    //     这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。

    // markRaw

    //     标记一个对象，使其永远不会转换为代理。返回对象本身
    //     应用场景:
    //         有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
    //         当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。
    const Refs = reactive({
      age: 5,
      money: 10000,
    });
    // 把响应式数据Refs对象中的某个属性age变为ref对象
    const age = toRef(Refs,'age')
    // 把响应式数据对象中的某个属性使用ref进行包装，变成ref对象
    const money = ref(Refs.money)
console.log(age);
console.log(money);

    const RefsMethods = () => {
     Refs.age+=4
    };
    return {
      ShowMethod,
      isShow,
      x,
      y,
      loading,
      data,
      errorMsg,
      // ...state 不是响应式的数据了
      ...toRefs(state),
      // m1,
      // m2,
      // m3,
      // m4,
      // updateMethod
      only,
      update,
      age,
      RefsMethods,
      money,
      Refs
    };
  },
};
</script>

<style lang="scss" scoped>
</style>