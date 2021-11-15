import { getCurrentInstance } from "vue";
import mitt from "mitt";

// 本质上是用mitt 代替了 原先的 $on $off 之类的通信方法。
// 核心问题是要解决的如何存组件的实例。
// vue3 中只能向上查 只有parent属性, 没有children
const DISPATCH = "dispatch";
const BROADCAST = "broadcast";

const wrapper = Symbol("wrapper");

const emitter = mitt();

export function useEmitter() {
  const currentComponentInstance = getCurrentInstance();

  function on(type, handler) {
    const handleWrapper = (e) => {
      const { value, type, emitComponentInstance } = e;
      // 外层组件向内层组件派发事件。
      // emit 过来的是外层组件
      // 子组件与父组件 想进行比较。
      // 这一步是为了确保 两个组件之间的关系。
      if (type === BROADCAST) {
        if (isChildComponent(currentComponentInstance, emitComponentInstance)) {
          handler && handler(...value);
        }
      } 
      // 内层组件向外层组件派发事件
      // emit 过来的是内层组件
      // 子组件与父组件进行比较
      else if (type === DISPATCH) {
        if (isChildComponent(emitComponentInstance, currentComponentInstance)) {
          handler && handler(...value);
        }
      } else {
        handler && handler(...value);
      }
    };
    // Save the real handler because the need to call off
    handler[wrapper] = handleWrapper;
    emitter.on(type, handleWrapper);
  }

  function broadcast(type, ...args) {
    emitter.emit(type, {
      type: BROADCAST,
      emitComponentInstance: currentComponentInstance,
      value: args,
    });
  }

  function dispatch(type, ...args) {
    emitter.emit(type, {
      type: DISPATCH,
      emitComponentInstance: currentComponentInstance,
      value: args,
    });
  }

  function off(type, handler) {
    emitter.off(type, handler[wrapper]);
  }

  function once(type, handler) {
    const handleOn = (...args) => {
      handler && handler(...args);
      off(type, handleOn);
    };
    on(type, handleOn);
  }

  return {
    on,
    broadcast,
    dispatch,
    off,
    once,
  };
}

/**
 * 判断后代子组 是否属于 祖先组件
 * @param {*} componentChild
 * @param {*} componentParent
 */
function isChildComponent(componentChild, componentParent) {

  const parentUId = componentParent.uid;
  // 一直往上找
  while (componentChild && componentChild?.parent?.uid !== parentUId) {
    componentChild = componentChild.parent;
  }

  return Boolean(componentChild);
}
