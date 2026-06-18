import Glyph from '../components/Glyph.jsx'
import { EXT } from '../data/icons.js'
import { WORKFLOW_ROWS } from '../data/workflow.js'

export default function Workflow() {
  return (
    <div className="page">
      <div className="page__head">
        <h1 className="page__title">Workflow</h1>
        <p className="page__sub">
          Automate processes with rule-based routing and actions.
          <a className="linkext" href="#" onClick={(e) => e.preventDefault()}>Learn How to Use Workflow <Glyph html={EXT} /></a>
        </p>
      </div>

      <div className="toolbar">
        <div className="input">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          <input placeholder="Search" />
        </div>
        <button className="btn btn--ghost">
          All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5h18M6 12h12M10 19h4" strokeLinecap="round" /></svg>
        </button>
        <div className="grow" />
        <button className="btn btn--primary">Create Workflow</button>
      </div>

      <table className="tbl">
        <thead>
          <tr><th>Name <span className="sort">▾</span></th><th>Type</th><th>Trigger</th><th>Created Date</th></tr>
        </thead>
        <tbody>
          {WORKFLOW_ROWS.map((r, i) => (
            <tr key={i}>
              <td><a className="cellname" href="#" onClick={(e) => e.preventDefault()}>{r[0]}</a></td>
              <td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
