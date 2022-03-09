import {defineComponent} from 'vue'
import './icon.scss'

export default defineComponent({
  props: {
    icon: {
      type: String
    }
  },
  setup(props, {attrs}) {
  },
  render() {
    const {
      icon
    } = this

    const {
      classics
    } = {...this.$attrs}

    const classStr = classics ? `z-icon ${classics}` : 'z-icon'
    return (
      <div className={`${classStr}`}>
        <svg aria-hidden="true">
          <use xlinkHref={`#icon-${icon}`}></use>
        </svg >
      </div>
    )
  }
})