export const isString = (val: unknown) => typeof val === 'string'
export const isNumber = (val: unknown) => typeof val === 'number'
export const isFunction = (val: unknown) => typeof val === 'function'
export const isBoolean = (val: unknown) => typeof val === 'boolean'
export const isObject = (val: unknown) => typeof val === 'object' && val !== null
export const isArray = Array.isArray


/**
 * 只处理数组和对象的两种情况
 * @param data
 */
export function deepClone(data: any) {
  let o: any
  if (isArray(data)) {
    o = []
  } else if (isObject(data)) {
    o = {}
  } else {
    return data
  }

  if (isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      o.push(deepClone(data[i]))
    }
  } else if (isObject(data)) {
    for (let i in data) {
      o[i] = deepClone(data[i])
    }
  }
  return o
}