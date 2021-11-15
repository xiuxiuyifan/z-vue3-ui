<template>
<div>
  <slot/>
</div>
</template>

<script setup>
import {useSlots, ref} from 'vue'

const slots = useSlots()
console.log(slots.default())
</script>