const noAccentNoCase = value =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const includeAll = (word, query) => {
  word = noAccentNoCase(word)
  return query.split(' ')
    .every(term => word.includes(noAccentNoCase(term)))
}

export { noAccentNoCase, includeAll }
