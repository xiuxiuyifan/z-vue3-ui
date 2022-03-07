import { defineComponent } from 'vue'
import './index.scss'
import {useEmitter} from '../hooks/emitter'

export default defineComponent({
  name: 'z-checkbox',
  props: {
    // 是否选中
    checked: {
      type: Boolean,
    },
    // 选中时候真实绑定的值
    trueValue: {
      type: [String, Number, Boolean]
    },
    falseValue: {
      type: [String, Number, Boolean]
    }
  },
  emits: ['update:change'],
  setup(props, { emit }) {
    const {dispatch} = useEmitter()
    const handleChange = () => {
      emit('update:change')
      // 通知form-item 值发生变化了。
      dispatch('form-item-change')
    }
    return { handleChange }
  },
  render() {
    const {
      checked,
      $slots,
      handleChange
    } = this
    return (
      <label class="z-checkbox">
        <span
          class={`z-checkbox-input-wrapper ${checked ? 'is-checked' : ''}`}
        >
          <input
            onChange={handleChange}
            type="checkbox"
            class={`input-checkbox`}
            checked={checked} />
        </span>
        <span class="z-checkbox__label">{$slots.default()}</span>
      </label>
    )
  }
})