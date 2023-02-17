export function slugifyText(text: string) {
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\_/g, '-')
    .replace(/\-\-+/g, '-')
    .replace(/\-$/g, '')
}

export function captalizeText(text: string) {
  const words = text.split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
  }

  return words.join(' ')
}
