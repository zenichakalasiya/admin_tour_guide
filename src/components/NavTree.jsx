import Glyph from './Glyph.jsx'
import Tag from './Tag.jsx'
import { ICON, CHEV } from '../data/icons.js'
import { NAV } from '../data/nav.js'

const PAD = [12, 40, 56] // padding-left per nesting level
const padFor = (lvl) => PAD[Math.min(lvl, PAD.length - 1)]

function Row({ node, level, activeId, isChild, onRowClick }) {
  const isActive = activeId === node.id
  const hasChildren = !!node.children
  return (
    <div
      className={`snav__row ${isChild ? 'child' : ''} ${isActive ? 'is-active' : ''}`}
      style={{ paddingLeft: padFor(level) }}
      onClick={(e) => onRowClick(node, e)}
    >
      {node.icon && <span className="ico"><Glyph html={ICON[node.icon]} /></span>}
      <span className="label">{node.label}</span>
      {node.tag && <Tag kind={node.tag} />}
      {hasChildren && <Glyph html={CHEV} />}
    </div>
  )
}

function TreeNode({ node, level, openGroups, activeId, onRowClick }) {
  if (node.section) return <div className="snav__section">{node.section}</div>
  const hasChildren = !!node.children
  if (!hasChildren) {
    return <Row node={node} level={level} activeId={activeId} isChild={level > 0} onRowClick={onRowClick} />
  }
  const open = openGroups.has(node.id)
  return (
    <div className={`snav__group ${open ? 'is-open' : ''}`}>
      <Row node={node} level={level} activeId={activeId} isChild={level > 0} onRowClick={onRowClick} />
      <div className="snav__children">
        <div className="snav__inner">
          {node.children.map((c) => (
            <TreeNode key={c.id} node={c} level={level + 1} openGroups={openGroups} activeId={activeId} onRowClick={onRowClick} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function NavTree({ openGroups, activeId, onRowClick }) {
  return (
    <nav className="snav" data-tour="nav">
      {NAV.map((n, i) => (
        <TreeNode key={n.id || `sec-${i}`} node={n} level={0} openGroups={openGroups} activeId={activeId} onRowClick={onRowClick} />
      ))}
    </nav>
  )
}
