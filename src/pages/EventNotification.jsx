import { useState } from 'react'
import { EN_TABS, EN_ROWS } from '../data/eventNotification.js'

const IconDup = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
const IconEdit = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
const IconDel = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" /></svg>

export default function EventNotification() {
  const [tab, setTab] = useState(0)
  const [rows, setRows] = useState(EN_ROWS)

  const toggle = (i) => setRows((rs) => rs.map((r, j) => (j === i ? { ...r, enabled: !r.enabled } : r)))

  return (
    <div className="page">
      <div className="page__head">
        <h1 className="page__title">Event Notification</h1>
        <p className="page__sub">Configure and manage digital signature templates</p>
      </div>

      <div className="tabs">
        {EN_TABS.map((t, i) => (
          <button key={t} className={`tab ${i === tab ? 'is-active' : ''}`} onClick={() => setTab(i)}>{t}</button>
        ))}
      </div>

      <table className="tbl">
        <thead>
          <tr><th>Name</th><th style={{ textAlign: 'right' }}>Enabled</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td style={{ textAlign: 'right', width: 160 }}>
                <div className="tog-wrap" style={{ justifyContent: 'flex-end' }}>
                  <span className={`tog ${r.enabled ? 'on' : ''}`} onClick={() => toggle(i)} />
                  <span className="txt">{r.enabled ? 'ON' : 'OFF'}</span>
                </div>
              </td>
              <td style={{ width: 120 }}>
                <div className="actions">
                  <span className="act" data-tip="Duplicate"><IconDup /></span>
                  <span className="act" data-tip="Edit"><IconEdit /></span>
                  <span className="act del" data-tip="Delete"><IconDel /></span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pager">
        <span className="pg">«</span><span className="pg">‹</span>
        <span className="pg is-active">1</span><span className="pg">2</span><span className="pg">3</span>
        <span className="pg">›</span><span className="pg">»</span>
        <select className="btn btn--ghost" style={{ height: 32, padding: '0 8px' }}><option>50</option><option>25</option></select>
        <span className="total">items per page</span>
        <div className="grow" />
        <span className="total">1 - 10 of 86 items</span>
      </div>
    </div>
  )
}
