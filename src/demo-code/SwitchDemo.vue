<demo>
示例代码
</demo>
<template>
  <div>
    <z-switch v-model:value="check"></z-switch>
  </div>
</template>

<script lang="ts">
import ZSwitch from "../components/Switch.vue";
import {ref} from "vue";
export default {
  name: 'switch-demo',
  components: {
    ZSwitch,
  },
  setup() {
    const check = ref(true)
    return {
      check
    }
  }
}
</script>
