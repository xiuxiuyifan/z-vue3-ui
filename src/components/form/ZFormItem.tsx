/*


*/
import { defineComponent, computed } from "vue";
import { useEmitter } from "../hooks/emitter";
import Validator from 'async-validator'

import './form-item.scss'

export default defineComponent({
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  // 把from 组件注入到子组件中
  inject: ['form'],
  mounted() {
    const { dispatch } = useEmitter()
    if(this.prop) {
      dispatch('on-form-item-add', this)
      this.setRules()
    }
  },
  computed: {
    fieldValue () {
      let field = this.prop
      return this.form.model[field]
    },
    isRequired() {
      let field = this.prop
      let rules = this.form.rules[field]
      return rules.find(rule => rule.required)
    },
    labelWidth() {
      return this.form.labelWidth
    }
  },
  data() {
    return {
      // validating error success
      validateState: '',
      validateMessage: ''
    }
  },
  setup(props, ctx){
    // 从form 中获取到当前 prop 绑定的值
    // 从rules里面取出校验规则
    // 
  },
  methods: {
    setRules() {
      const { on } = useEmitter()
      on('on-form-change', this.onFieldChange)
      on('on-form-blur', this.onFieldBlur)
    },
    // 从form.rules 中获取到当前组件的校验规则
    getRules() {
      let {prop} = this
      let rule = this.form.rules[prop] || []
      return rule 
    },
    // 从rules 中过滤出不同的事件类型，
    filterRules(trigger) {
      let rules = this.getRules()
      //如果用户没有再rule里面传 trigger 默认也要进行校验
      return rules.filter( rule => !rule.trigger || ~rule.trigger.indexOf(trigger))
    },
    validate(trigger, callback = function(msg){}) {
      // 拿到传递的需要校验的rules
      let rules = this.filterRules(trigger)
      if(!rules || rules.length == 0) {
        return true
      }
      // 开始校验
      this.validateState = 'validating'
      let descriptor = {}
      descriptor[this.prop] = rules
      const validator = new Validator(descriptor)

      let model = {}
      model[this.prop] = this.fieldValue
      // function(source, [options], callback): Promise
      validator.validate(model,{
        firstFields: true    // 发现有一个错误就不再进行校验了
      }, (errors, fields) => {
        // 检验通过 errors 返回一个 null
        this.validateState = !errors ? 'success': 'error'
        this.validateMessage = errors[0].message || ''
        callback(this.validateMessage)
      })
    },
    onFieldChange() {
      // 只是在用户触发事件的时候进行校验，全部所有的检验在 form 组件里面发起。
      this.validate('change')
    },
    onFieldBlur() {
      this.validate('blur')
    }
  },
  render() {
    const errorTag = (validateState, errMsg) => {
      if (validateState === 'error') {
        return <div className='error-msg'>{errMsg}</div>
      }
    }
    const { 
      label,
      $slots,
      validateState,
      validateMessage,
      isRequired,
      labelWidth
    } = this
    return (
      <div className='z-form-item'>
        <label className={`label ${isRequired ? 'required-label' : ''}`} style={`width: ${labelWidth}px`}>{label}</label>
        <div className='form-item-content'>
          {$slots.default()}
          {errorTag(validateState, validateMessage)}
        </div>
      </div>
    )
  }
})