/* eslint-disable no-undef */
import { noSlug, includeAll } from '../src'

describe('Testing noSlug function', () => {
  it('Should remove all special characters', () => {
    expect(noSlug('Ação')).toBe('acao')
    expect(noSlug('Repolho')).toBe('repolho')
    expect(noSlug('José das Couves')).toBe('jose das couves')
    expect(noSlug('ESPAÑOL')).toBe('espanol')
  })
})

describe('Testing includeAll function', () => {
  it('Should return true if target contains all terms', () => {
    expect(includeAll('Edgar Muniz Berlinck', 'Berlinck')).toBeTruthy()
    expect(includeAll('Edgar Muniz Berlinck', 'Muniz Berlinck')).toBeTruthy()
    expect(includeAll('Edgar Muniz Berlinck', 'Edgar Berlinck')).toBeTruthy()
  })

  it('Should return false if target do not containn all terms', () => {
    expect(includeAll('Edgar Muniz Berlinck', 'Gostosão Berlinck')).toBeFalsy()
  })
})
