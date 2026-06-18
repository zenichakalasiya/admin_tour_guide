import { useEffect, useRef, useState } from 'react'
import Glyph from './Glyph.jsx'
import { ICON } from '../data/icons.js'
import { PLACEHOLDERS, RECENT } from '../data/overview.js'

export default function Search({ onNavigate }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [ph, setPh] = useState(PLACEHOLDERS[0])
  const wrapRef = useRef(null)
  const inputRef = useRef(null)

  /* rotate placeholder while idle */
  useEffect(() => {
    let i = 1
    const id = setInterval(() => {
      if (document.activeElement !== inputRef.current && !inputRef.current?.value) {
        setPh(PLACEHOLDERS[i % PLACEHOLDERS.length])
        i++
      }
    }, 2200)
    return () => clearInterval(id)
  }, [])

  /* close on outside click */
  useEffect(() => {
    const onDoc = (e) => { if (!wrapRef.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const pick = (go) => { setOpen(false); if (go) onNavigate(go) }

  return (
    <div className={`search ${open ? 'is-open' : ''}`} ref={wrapRef} data-tour="search">
      <div className={`search__box ${open ? 'is-focus' : ''} ${value ? 'has-text' : ''}`}>
        <svg className="search__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
        </svg>
        <input
          ref={inputRef}
          className="search__input"
          type="text"
          autoComplete="off"
          placeholder={ph}
          value={value}
          onFocus={() => setOpen(true)}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search__clear" aria-label="Clear" onClick={() => { setValue(''); inputRef.current?.focus() }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="search__panel">
        <div className="search__label">Recently Used</div>
        <ul className="search__recent">
          {RECENT.map((r, i) => (
            <li key={i} onClick={() => pick(r.go)}>
              <Glyph html={ICON[r.ic]} /><span>{r.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
