import {defineComponent, ref, h} from 'vue'
import ZCheckbox from '../components/checkbox/Checkbox'

export default defineComponent({
  setup() {
    let checked = ref<boolean>(true)
    const handleChange = () => {
      checked.value = !checked.value
    }
    return {
      checked,
      handleChange
    }
  },
  render() {
    const {checked, handleChange} = this
    return (
      <ZCheckbox 
      checked={checked} 
      onChange={handleChange}
      />
    )
  }
})
