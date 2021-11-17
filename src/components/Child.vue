<template>
  <div>child 触发生命周期钩子：{{ val }}</div>
  <button @click="ValMethod">自增</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
//3.0的生命周期钩子要比2.x生命周期钩子块
export default {
  // v2生命周期钩子
  beforeCreate() {
    console.log("2 beforeCreate");
  },
  created() {
    console.log("2 created");
  },
  beforeMount() {
    console.log("2 beforeMount");
  },
  mounted() {
    console.log("2 mounted");
  },
  beforeUpdate() {
    console.log("2 beforeUpdate");
  },
  updated() {
    console.log("2 updated");
  },
  beforeUnmount() {
    console.log("2 beforeUnmount");
  },
  unmounted() {
    console.log("2 unmounted");
  },
  setup() {
    //v3生命周期钩子
    console.log('3 setup');
    onBeforeMount(() => {
      console.log("3 onBeforeMount");
    });
    onMounted(() => {
      console.log("3 onMounted");
    });
    onBeforeUpdate(() => {
      console.log("3 onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("3 onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("3 onBeforeUnmount");
    }),
      onUnmounted(() => {
        console.log("3 onUnmounted");
      });
    let val = ref(0);
    function ValMethod() {
      val.value += 1;
    }
    return {
      val,
      ValMethod,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>