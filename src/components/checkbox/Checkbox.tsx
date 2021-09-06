import {defineComponent} from 'vue'
import './index.scss'

export default defineComponent({
  name: 'z-checkbox',
  props: {
    checked: {
      type: Boolean,
    }
  },
  emits: ['change'],
  setup(props, {emit}) {
    const handleClick = () => {
      emit('change')
    }

    return () => (
      <span class={`z-checkbox ${props.checked ? 'is-checked' : ''}`} onClick={handleClick}>
        <input type="checkbox" class={`input-checkbox`} checked={props.checked}/>
      </span>
    )
  }
})
