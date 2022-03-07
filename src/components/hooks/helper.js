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