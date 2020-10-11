import {createApp, h, ref} from 'vue'
import Modal from './Modal.vue'

const openModal = (options) => {
  let {title, content, visible, ok, cancel} = options
  //创建一个div挂载到body下面
  const div = document.createElement('div')
  document.body.appendChild(div)

  const destory = () => {
    app.unmount(div)
    div.remove()
  }

  const app = createApp({
    render() {
      return h(Modal, {
        visible,
        ok,
        cancel,
        'onUpdate:visible': (newVisible) => {
          //表示需要关闭哦，需要关闭才会把visible变成false
          if (newVisible === false) {
            //销毁
            destory()
          }
        }
      }, {
        title: () => title,
        content: () => content
      })
    }
  })
  app.mount(div)
}

export {
  openModal
}
