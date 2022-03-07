## 举一反三

### 1、如何确定两个组件存在后代关系？
在`Vue3`中取消了$children的属性，只能从当前组件上面拿到`$parent`属性，来获取父组件的一些信息，最顶层组件的`$parent.uid = null`，我们通过这个特征来确定两个组件之间的关系。代码如下
```javascript
export function isChildComp(child, parent) {
  // 取 child 的 parentId
  // 与传进来的 parent 组件的 id 进行比较
  // 如果相等返回 true
  // 如果不行等 就继续往上找
  let childId = child.parent.uid;

  let parentId = parent.uid;

  if (childId === parentId) {
    return true;
  }

  while (child && child.parent.uid !== parentId) {
    child = child.parent;
  }
  // 找到最顶层的时候 是 null
  return Boolean(child);
}
```
### 2、如何实现Vue2中的$on？


