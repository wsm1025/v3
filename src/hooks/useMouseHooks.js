import { ref, onMounted, onBeforeUnmount } from "vue";
export default function () {
  let x = ref(-1);
  let y = ref(-1);
  const ClickMethod = (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  onMounted(() => {
    window.addEventListener("click", ClickMethod);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", ClickMethod);
  });
  return {
    x,
    y,
  };
}