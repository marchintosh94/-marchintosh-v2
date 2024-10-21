import cn from '@/utils/cn'

describe('cn', () => {
  it('should concatenate multiple class names as a string', () => {
    expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3')
  })

  it('should ignore falsy class names', () => {
    expect(cn('class1', '', 'class2', 'class3')).toBe('class1 class2 class3')
  })

  it('should ignore class names with boolean value of false', () => {
    expect(cn({ class1: true, class2: false, class3: true })).toBe(
      'class1 class3'
    )
  })

  it('should ignore empty class names', () => {
    expect(cn({ '': true, '   ': true, class1: true })).toBe('class1')
  })

  it('should trim leading and trailing spaces', () => {
    expect(cn('  class1  ', '  class2  ')).toBe('class1 class2')
  })

  it('should return an empty string when no arguments are passed', () => {
    expect(cn()).toBe('')
  })

  it('should return an empty string when an empty string is passed', () => {
    expect(cn('')).toBe('')
  })

  it('should return an empty string when an empty array is passed', () => {
    expect(cn([])).toBe('')
  })

  it('should return an empty string when an empty object is passed', () => {
    expect(cn({})).toBe('')
  })

  it('should concatenate class names from strings, arrays, and objects', () => {
    expect(
      cn('class1', ['class2', 'class3'], { class4: true, class5: false })
    ).toBe('class1 class2 class3 class4')
  })

  it('should handle invalid arguments and log an error', () => {
    console.error = jest.fn()
    expect(cn(123 as any)).toBe('')
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('cn: Invalid arguments')
    )
  })

  it('should handle JSON.stringify throwing an error', () => {
    console.error = jest.fn()
    expect(cn(BigInt(123) as any)).toBe('')
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('cn: Invalid arguments')
    )
  })
})
