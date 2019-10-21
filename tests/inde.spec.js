/* eslint-disable no-undef */
import { noAccentNoCase, includeAll } from '../src'

describe('Testing noAccentNoCase function', () => {
  it('Should remove all special characters', () => {
    expect(noAccentNoCase('Ação')).toBe('acao')
    expect(noAccentNoCase('Repolho')).toBe('repolho')
    expect(noAccentNoCase('José das Couves')).toBe('jose das couves')
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
