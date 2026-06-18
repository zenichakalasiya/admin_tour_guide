import { useCallback, useState } from 'react'
import Rail from './components/Rail.jsx'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Tooltip from './components/Tooltip.jsx'
import Tour from './components/Tour.jsx'
import Overview from './pages/Overview.jsx'
import Workflow from './pages/Workflow.jsx'
import EventNotification from './pages/EventNotification.jsx'
import Generic from './pages/Generic.jsx'
import { NODE } from './data/nav.js'

export default function App() {
  const [activeId, setActiveId] = useState('overview')
  const [openGroups, setOpenGroups] = useState(new Set())
  const [tourOpen, setTourOpen] = useState(true)

  const toggleGroup = useCallback((id) => {
    setOpenGroups((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  /* open every ancestor group of a node so the active leaf is visible */
  const revealAncestors = useCallback((id) => {
    setOpenGroups((prev) => {
      const next = new Set(prev)
      let node = NODE[id]
      while (node && node.parentId) { next.add(node.parentId); node = NODE[node.parentId] }
      return next
    })
  }, [])

  const navigate = useCallback((id) => {
    const node = NODE[id]
    if (!node) return
    if (node.children && !node.view) { toggleGroup(id); return } // pure group → just expand
    setActiveId(id)
    revealAncestors(id)
    document.querySelector('.content')?.scrollTo({ top: 0 })
  }, [toggleGroup, revealAncestors])

  const onRowClick = useCallback((node) => {
    if (node.children && !node.view) { toggleGroup(node.id); return }
    navigate(node.id)
  }, [navigate, toggleGroup])

  const startTour = useCallback(() => { setActiveId('overview'); setTourOpen(true) }, [])

  /* the tour sends each step here so we can prep the page it points at */
  const onTourStep = useCallback((step) => {
    if (step.id === 'overview' || step.id === 'frequent') setActiveId('overview')
  }, [])

  const node = NODE[activeId] || NODE.overview
  const renderPage = () => {
    const view = node.view || 'generic'
    if (view === 'overview') return <Overview onNavigate={navigate} />
    if (view === 'workflow') return <Workflow />
    if (view === 'eventnotif') return <EventNotification />
    return <Generic node={node} />
  }

  return (
    <>
      <div className="app">
        <Rail />
        <Sidebar openGroups={openGroups} activeId={activeId} onRowClick={onRowClick} onNavigate={navigate} />
        <main className="content" data-tour="content">{renderPage()}</main>
      </div>
      <Topbar onHelp={startTour} />
      <Tooltip />
      <Tour open={tourOpen} onClose={() => setTourOpen(false)} onStepEnter={onTourStep} />
    </>
  )
}
