<template>
  <demo-doc
    title="基本用法"
    description="form组件的基本用法"
    :component="FormDemo"
  ></demo-doc>
  <attr title="form attr" :columns="columns" :data="data"></attr>
  <attr title="form-item attr" :columns="columns" :data="data1"></attr>
</template>

<script lang="ts" setup>
import DemoDoc from '../components/DemoDoc.vue';
import FormDemo from '../demo-code/FormDemo.vue';
import Attr from '../components/Attr.vue';
import { columns } from '../lib/data';
const data = [
  {
    params: 'model',
    desc: '绑定数据',
    type: '{}',
    select: '{}',
    default: 'null',
  },
  {
    params: 'rules',
    desc: '校验规则',
    type: '{}',
    select: '{}',
    default: 'null',
  }
];
const data1 = [
  {
    params: 'label',
    desc: 'label描述',
    type: 'string',
    select: '-',
    default: '',
  },
  {
    params: 'prop',
    desc: 'rules里面对应的字段',
    type: 'string',
    select: '-',
    default: '',
  }
];
</script>