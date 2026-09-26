export function getYouTubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null

  const trimmed = url.trim()
  if (!trimmed) return null

  const match = trimmed.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/,
  )

  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`
  }

  return null
}
