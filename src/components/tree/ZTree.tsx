import {computed, defineComponent, PropType, reactive, ref, watchEffect} from 'vue'
import {ITreeData} from "./types";
import {deepClone} from "../utils/utils";
import ZTreeNode from './ZTreeNode'

export default defineComponent({
  name: 'ZTree',
  components: {
    ZTreeNode
  },
  props: {
    data: {
      type: Array as PropType<ITreeData[]>,
      default: () => {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: Boolean
    }
  },
  setup(props) {
    // 缓存数据
    let cloneData = ref<ITreeData[]>(deepClone(props.data))

    return () => {
      return <>
        <div class='z-tree'>
          <ul class='z-tree-node-ul-outer z-tree-node-ul'>
          {
            cloneData.value.map(
              (item, index) => <ZTreeNode data={item} key={index} showCheckbox={props.showCheckbox}/>
            )
          }
          </ul>
        </div>
      </>
    }
  }
})