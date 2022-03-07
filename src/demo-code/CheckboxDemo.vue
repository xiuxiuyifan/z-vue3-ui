<template>
  <Checkbox :checked="checked" @change="handleChange">复选框</Checkbox>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Checkbox from '../components/checkbox/Checkbox'
export default defineComponent({
  components: {
    Checkbox
  },
  setup() {
    let checked = ref<boolean>(true)
    const handleChange = () => {
      checked.value = !checked.value
    }
    return {
      checked,
      handleChange
    }
  }
})
</script>
