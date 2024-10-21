import {
  isNotEmptyArray,
  isNotEmptyObject,
  isNotEmptyString
} from '@/utils/guards'

describe('isNotEmptyString', () => {
  it('should return true for a non-empty string', () => {
    expect(isNotEmptyString('hello')).toBe(true)
  })

  it('should return false for an empty string', () => {
    expect(isNotEmptyString('')).toBe(false)
  })

  it('should return false for a non-string value', () => {
    expect(isNotEmptyString(123)).toBe(false)
    expect(isNotEmptyString(null)).toBe(false)
    expect(isNotEmptyString(undefined)).toBe(false)
    expect(isNotEmptyString({})).toBe(false)
  })
})

describe('isNotEmptyObject', () => {
  it('should return true for a non-empty object', () => {
    expect(isNotEmptyObject({ key: 'value' })).toBe(true)
  })

  it('should return false for an empty object', () => {
    expect(isNotEmptyObject({})).toBe(false)
  })

  it('should return false for a non-object value', () => {
    expect(isNotEmptyObject('string')).toBe(false)
    expect(isNotEmptyObject(123)).toBe(false)
    expect(isNotEmptyObject(null)).toBe(false)
    expect(isNotEmptyObject(undefined)).toBe(false)
    expect(isNotEmptyObject([])).toBe(false)
  })
})

describe('isNotEmptyArray', () => {
  it('should return true for a non-empty array', () => {
    expect(isNotEmptyArray(['item'])).toBe(true)
  })

  it('should return false for an empty array', () => {
    expect(isNotEmptyArray([])).toBe(false)
  })

  it('should return false for a non-array value', () => {
    expect(isNotEmptyArray('string')).toBe(false)
    expect(isNotEmptyArray(123)).toBe(false)
    expect(isNotEmptyArray(null)).toBe(false)
    expect(isNotEmptyArray(undefined)).toBe(false)
    expect(isNotEmptyArray({})).toBe(false)
  })
})
