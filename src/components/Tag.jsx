/* New / Update pill with tooltip (via data-tip handled by <Tooltip/>). */
const COPY = {
  new: { cls: 'tag--new', text: 'New', tip: 'Newly added module' },
  upd: { cls: 'tag--upd', text: 'Update', tip: "Recently updated — check what's changed" },
}

export default function Tag({ kind }) {
  const c = COPY[kind]
  if (!c) return null
  return <span className={`tag ${c.cls}`} data-tip={c.tip}>{c.text}</span>
}
