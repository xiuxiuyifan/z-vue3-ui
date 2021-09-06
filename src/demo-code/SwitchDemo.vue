<template>
  <div>
    <z-switch v-model="check" @change="gogo"></z-switch>
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
    const check = ref(false)
    const gogo = () => {
      console.log('hihihi')
    }
    return {
      check,
      gogo
    }
  }
}
</script>
