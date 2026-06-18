import { useState } from 'react'
import Glyph from '../components/Glyph.jsx'
import Card from '../components/Card.jsx'
import { EXT } from '../data/icons.js'
import { FREQUENT, ATTENTION, COLLAPSES } from '../data/overview.js'

function Collapse({ data, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`collapse ${open ? 'is-open' : ''}`}>
      <div className="collapse__head" onClick={() => setOpen((v) => !v)}>
        <div><h3>{data.title}</h3><p>{data.desc}</p></div>
        <span className="collapse__chev">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
      <div className="collapse__body">
        <div className="cards">
          {data.cards.map((c, i) => <Card key={i} data={c} onNavigate={onNavigate} />)}
        </div>
      </div>
    </div>
  )
}

export default function Overview({ onNavigate }) {
  return (
    <div className="page">
      <div className="page__head">
        <h1 className="page__title">Overview</h1>
        <p className="page__sub">
          Centralized hub to manage and configure all ITSM settings and modules.
          <a className="linkext" href="#" onClick={(e) => e.preventDefault()}>View Setup Guide <Glyph html={EXT} /></a>
        </p>
      </div>

      <div className="sec" data-tour="frequent">
        <h2 className="sec-title">Frequently Used Modules</h2>
        <div className="cards">{FREQUENT.map((c, i) => <Card key={i} data={c} onNavigate={onNavigate} />)}</div>
      </div>

      <div className="sec">
        <h2 className="sec-title">Need Your Attention</h2>
        <div className="cards">{ATTENTION.map((c, i) => <Card key={i} data={c} onNavigate={onNavigate} />)}</div>
      </div>

      <div className="sec">
        {COLLAPSES.map((col) => <Collapse key={col.id} data={col} onNavigate={onNavigate} />)}
      </div>
    </div>
  )
}
