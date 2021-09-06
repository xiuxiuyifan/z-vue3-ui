import {defineComponent, ref} from 'vue'
import ZCheckbox from '../components/checkbox/Checkbox'

export default defineComponent({
  setup() {
    let checked = ref<boolean>(true)
    const handleChange = () => {
      console.log('hiihihi')
    }
    return () => (
      <ZCheckbox checked={checked.value} onChange={handleChange}/>
    )
  }
})
