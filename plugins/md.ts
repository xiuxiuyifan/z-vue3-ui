import path from 'path'
import fs from 'fs'

import {marked} from 'marked'

const mdToJs: (str: string) => string = function (str: string) {
  return JSON.stringify(marked.parse(str))
}

export default function md() {
  return {
    name: 'md',
    transform(code: string, id: string) {
      if (id.endsWith('.md')) {
        let genCode = "export default" + mdToJs(code)
        return {
          code: genCode,
          map: null
        }
      }
    },
    transforms: [{  // 用于 rollup // 插件
      test: (context: any) => context.path.endsWith('.md'),
      transform: ({ code }: any) => mdToJs(code)
    }]
  }
}
