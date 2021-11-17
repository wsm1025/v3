import { ref } from 'vue'
export default function (url) {
  const loading = ref(true)
  const data = ref(null)
  const errorMsg = ref('')
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      loading.value = false;
      data.value = myJson
    }).catch(e => {
      loading.value = false;
      errorMsg.value = e.message || '未知错误'
    })
  return {
    loading,
    data,
    errorMsg

  }
}