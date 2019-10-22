const noSlug = value =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const includeAll = (word, query) => {
  const match = []
  query
    .split(' ')
    .forEach(term =>
      match.push(noSlug(word).includes(noSlug(term)))
    )
  const reducer = (result, current) => result && current
  return match.reduce(reducer)
}

export { noSlug, includeAll }
