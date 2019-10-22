const noSlug = value =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const includeAll = (word, query) => {
  word = noSlug(word)
  return query.split(' ').every(term => word.includes(noSlug(term)))
}

export { noSlug, includeAll }
