import { useDirecotryPicker } from '@/utils/useFile';
import { defineStore } from 'pinia';

const useFileStore = defineStore('file', () => {
  let audioList = ref<any>();

  let testData = ref('')

  function getFileSteam() {
    useDirecotryPicker().then(res => {
      audioList.value = res!.children!.filter(item => item.name!.indexOf('.mp3') > 0)
    })
  }

  function setData(value: string) {
    testData.value = value
  }

  return {
    audioList,
    getFileSteam,
    testData,
    setData
  }
}, 
{
  persist: true
})

export default useFileStore

