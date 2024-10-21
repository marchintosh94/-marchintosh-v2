export const isNotEmptyString = (value: any): value is string =>
  typeof value === 'string' && value.trim().length > 0

export const isNotEmptyObject = <T extends string | number | symbol, C>(
  value: any
): value is Record<T, C> =>
  !!value &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  Object.keys(value).length > 0

export const isNotEmptyArray = (value: any): value is string[] =>
  !!value && Array.isArray(value) && value.length > 0
