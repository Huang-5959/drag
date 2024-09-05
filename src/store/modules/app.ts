import { defineStore, type StoreDefinition } from 'pinia'
import { ref } from 'vue'

const useCountStore = defineStore('count', () => {
  const count = ref(0)

  function addCount() {
    count.value++
  }

  return {
    count,
    addCount
  }
})

export default useCountStore

