const noSlug = value =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const includeAll = (word, query) => {
  word = noSlug(word)
  return query.split(' ').every(term => word.includes(noSlug(term)))
}

const onlyLetters = value =>
  value
    .replace(/[^A-Za-z]/g, '')
    .toLowerCase()

export { noSlug, includeAll, onlyLetters }
