<template>
  <Tree :data="data">
    <TreeItem></TreeItem>
    <TreeItem></TreeItem>
  </Tree>
</template>
<script lang="ts" setup>
import Tree from '../components/tree/ZTree'
import TreeItem from '../components/tree/ZTreeNode'

const data = [
  {
    title: 'parent 1',
    expand: true,
    children: [
      {
        title: 'parent 1-1',
        expand: true,
        children: [
          {
            title: 'leaf 1-1-1'
          },
          {
            title: 'leaf 1-1-2'
          }
        ]
      },
      {
        title: 'parent 1-2',
        children: [
          {
            title: 'leaf 1-2-1'
          },
          {
            title: 'leaf 1-2-1'
          }
        ]
      }
    ]
  }
]
</script>