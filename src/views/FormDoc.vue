<template>
  <div>
    <z-form :model="formData" :rules="rules" label-width="90">
      <z-form-item label="用户名" prop="username">
        <z-input ref="inputRef" v-model:value="formData.username" />
      </z-form-item>
      <z-form-item label="邮箱" prop="email">
        <z-input v-model:value="formData.email" />
      </z-form-item>
    </z-form>
    <z-button @click="handleClick" theme='primary'>提 交</z-button>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const rules = {
      username: [
        { required: true, message: '用户名不能为空！', trigger: 'blur' },
      ],
      email: [
        { required: true, message: '邮箱不能为空！'},
        { type: 'email', message: '邮箱格式不正确！', trigger: 'blur' },
      ],
    };
    const formData = reactive({
      username: '111',
      email: '222',
    });

    const inputRef = ref();
    const handleClick = () => {
      inputRef.value.hi();
    };
    return {
      formData,
      rules,
      handleClick,
      inputRef,
    };
  },
});
</script>