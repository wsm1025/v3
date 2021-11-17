<template>
  <div>{{ msg }}</div>
  <button @click="CLiAction">子触发父级</button>
</template>

<script>
export default {
  props: ["msg",'msg1'],
  emits:['msg'],
  setup(props, context) {
    //props参数，是一个对象，里面有父级
    // 组件像子组件传递的数据，且子组件中使用props接收的参数
    // console.log(props.msg);
    // console.log(context);

    // ==================================
    // Attribute (非响应式对象，等同于 $attrs)
    // console.log(context.attrs);

    // 插槽 (非响应式对象，等同于 $slots)
    // console.log(context.slots);

    // 触发事件 (方法，等同于 $emit)
    // console.log(context.emit);

    // 暴露公共 property (函数)
    // console.log(context.expose);
    function CLiAction() {
      context.emit("msg");
    }
    return { CLiAction };
  },
};
</script>

<style lang="scss" scoped>
</style>