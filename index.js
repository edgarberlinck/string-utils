const noAccentNoCase = value =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const includeAll = (word, query) => {
  const match = []
  query
    .split(' ')
    .forEach(term =>
      match.push(noAccentNoCase(word).includes(noAccentNoCase(term)))
    )
  const reducer = (result, current) => result && current
  return match.reduce(reducer)
}

export { noAccentNoCase, includeAll }
