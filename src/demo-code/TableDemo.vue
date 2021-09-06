<template>
  <z-table
      :columns="columns"
      :data="dataSource"
  ></z-table>
</template>

<script lang="ts">
import ZTable from "../components/table/index.vue";

export default {
  components: {ZTable},
  setup() {
    const dataSource = [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
    const columns = [
      {
        title: '日期',
        key: 'date'
      },
      {
        title: '姓名',
        key: 'name'
      },
      {
        title: '地址',
        key: 'address'
      }
    ]
    return {
      dataSource,
      columns
    }
  }
}
</script>
