import {defineComponent, PropType} from 'vue'
import Icon from '../icon/icon';
import {ITreeData} from "./types";
import './z-tree-node.scss'

export default defineComponent({
  name: 'ZTreeNode',
  props: {
    data: {
      type: Object as PropType<ITreeData>,
      default: () => ({})
    },
    showCheckbox: {
      type: Boolean,
      default: Boolean
    }
  },
  setup(props) {
    const handleExpand = () => {
      props.data.expand = !props.data.expand
    }
    return () => {
      return <>
        <li class='z-tree-node-li'>
          <span class='z-tree-head-wrapper'>
          {
            props.data.children ? (
              props.data?.expand ? 
              <span class='z-tree-icon' onClick={handleExpand}>
                <Icon icon='reduce'/>
              </span> 
              : <span class='z-tree-icon' onClick={handleExpand}>
                  <Icon icon='add'/>
                </span>
            ) : null
          }
          <span class='z-tree-title'>{props.data?.title}</span>
          </span>
          <ul class='z-tree-node-ul'>
          {
            props.data.expand && props.data?.children ?
              props.data.children.map(
                (item, index) => <ZTreeNode data={item} showCheckbox={props.showCheckbox}/>
              )
              : null
          }
          </ul>
        </li>
      </>
    }
  }
})