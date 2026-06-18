/* Renders a raw inline-SVG string (from data/icons.js). */
export default function Glyph({ html, className, style }) {
  if (!html) return null
  return <span className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />
}
