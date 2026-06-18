import Search from './Search.jsx'
import NavTree from './NavTree.jsx'

export default function Sidebar({ openGroups, activeId, onRowClick, onNavigate }) {
  return (
    <aside className="sidebar">
      <Search onNavigate={onNavigate} />
      <NavTree openGroups={openGroups} activeId={activeId} onRowClick={onRowClick} />
    </aside>
  )
}
