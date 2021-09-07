import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
  return JSON.stringify(marked(str))
}

export default function md() {
  return {
    name: 'md',
    transform(code, id) {
      if (id.endsWith('.md')) {
        let genCode = "export default" + mdToJs(code)
        return {
          code: genCode,
          map: null
        }
      }
    },
    transforms: [{  // 用于 rollup // 插件
      test: context => context.path.endsWith('.md'),
      transform: ({ code }) => mdToJs(code)
    }]
  }
}
