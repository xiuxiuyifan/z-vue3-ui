import * as fs from "fs";
export default function SourceCode() {
  return {
    name: 'source-code', // 必须的，将会在 warning 和 error 中显示
    async transform(code, id: string){
      if(~id.indexOf('demo-code') && !~id.indexOf('?')){
        let sourceCode = JSON.stringify(fs.readFileSync(id).toString())
        let genCode = code.split('export default _sfc_main')[0] || ''
        genCode +=`_sfc_main.__sourceCode = ${sourceCode}\n`
        genCode += `export default _sfc_main`
        return {
          code: genCode,
          map: null
        }
      }
    }
  }
}
