### 使用

安装完本组件库之后在main.js中引入样式文件
```javascript
import 'z-vue3-ui/package/lib/z-vue-ui.css'
```

Vue单文件组件中使用

```vue
<template>
  <Button>按钮</Button>
</template>

<script>
import {Button} from 'z-vue3-ui'
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>
```
