import { isNotEmptyArray, isNotEmptyObject, isNotEmptyString } from './guards'

type CNClasses = Record<string, boolean> | string[] | string | null | undefined

const objectToString = (obj: Record<string, boolean>) =>
  Object.entries(obj).reduce((accumulator, current) => {
    if (current[1] && current[0].trim()) {
      accumulator += ` ${current[0]}`
    }
    return accumulator.trim()
  }, '')

const stringArrayToString = (arr: string[]) =>
  arr.reduce((accumulator, current, index) => {
    if (current) {
      accumulator += ` ${current}`
    }
    return accumulator.trim()
  }, '')

const getClasses = (element: CNClasses): string => {
  if (isNotEmptyString(element)) {
    return element.trim()
  }
  if (isNotEmptyArray(element)) {
    return stringArrayToString(element)
  }
  if (isNotEmptyObject(element)) {
    return objectToString(element)
  }
  return ''
}

/**
 * Concatenate multiple class names as a string
 */
const cn = (...args: CNClasses[]): string => {
  let classes = ''
  for (let i = 0; i < args.length; i++) {
    const currentClass = getClasses(args[i])
    if (currentClass) {
      classes += `${currentClass} `
      continue
    }
    try {
      console.error(`cn: Invalid arguments ${JSON.stringify(args[i])}`)
    } catch {
      console.error(`cn: Invalid arguments`)
    }
  }
  return classes.trim()
}

export default cn
