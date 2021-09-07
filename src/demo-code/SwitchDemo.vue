<template>
  <div>
    <z-switch v-model:value="check" @change="gogo"></z-switch>
  </div>
</template>

<script lang="ts">
import ZSwitch from "../components/Switch.vue";
import {ref, defineComponent} from "vue";
export default defineComponent({
  name: 'switch-demo',
  components: {
    ZSwitch,
  },
  setup() {
    const check = ref(false)
    const gogo = () => {
    }
    return {
      check,
      gogo
    }
  }
})
</script>
