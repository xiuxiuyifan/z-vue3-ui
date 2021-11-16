<template>
  <div>
    <z-form ref="formRef" :model="formData" :rules="rules" label-width="90">
      <z-form-item label="用户名" prop="username">
        <z-input v-model:value="formData.username" />
      </z-form-item>
      <z-form-item label="邮箱" prop="email">
        <z-input v-model:value="formData.email" />
      </z-form-item>
    </z-form>
    <z-button @click="handleSubmitClick" theme='primary'>提 交</z-button>
    <z-button 
      @click="handleResetClick" 
      theme='primary' 
      style="margin-left:10px"
    >重 置</z-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const rules = {
      username: [
        { required: true, message: '用户名不能为空！', trigger: 'blur' },
      ],
      email: [
        { required: true, message: '邮箱不能为空！'},
        { type: 'email', message: '邮箱格式不正确！'},
      ],
    };
    const formData = reactive({
      username: '111',
      email: '222',
    });

    const formRef = ref();
    const handleResetClick = () => {
      formRef.value.resetFields();
    };
    const handleSubmitClick = async () => {
      let valid = await formRef.value.validate()
      if(valid) {
        alert('校验通过！')
      }else {
        console.log('校验失败！')
      }
    }
    return {
      formData,
      rules,
      handleSubmitClick,
      handleResetClick,
      formRef,
    };
  },
});
</script>