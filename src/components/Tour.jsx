import { useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Glyph from './Glyph.jsx'
import { TOUR_STEPS, TOUR_GROUPS } from '../data/tourSteps.js'

const CARD_W = 372
const CARD_HALF = 200 // approx half height, for vertical clamping

export default function Tour({ open, onClose, onStepEnter }) {
  const [index, setIndex] = useState(0)
  const [rect, setRect] = useState(null)
  const step = TOUR_STEPS[index]
  const last = index === TOUR_STEPS.length - 1

  const next = () => (last ? onClose() : setIndex((i) => Math.min(i + 1, TOUR_STEPS.length - 1)))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  /* reset to first step each time the tour opens */
  useEffect(() => { if (open) setIndex(0) }, [open])

  /* let the parent prep the UI (e.g. navigate to Overview) for this step */
  useEffect(() => { if (open) onStepEnter?.(step) }, [open, index])

  /* measure the target element; keep it in sync on scroll / resize */
  useLayoutEffect(() => {
    if (!open) return
    const el = document.querySelector(step.target)
    if (!el) { setRect(null); return }
    el.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    const measure = () => {
      const r = el.getBoundingClientRect()
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height })
    }
    const t = setTimeout(measure, 60) // wait for smooth scroll to settle
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, true)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure, true)
    }
  }, [open, index])

  /* keyboard: Esc to skip, arrows to move */
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (!open || !rect) return null

  const vw = window.innerWidth
  const vh = window.innerHeight
  const pad = step.pad ?? 8
  const hole = {
    top: Math.max(0, rect.top - pad),
    left: Math.max(0, rect.left - pad),
    width: rect.width + pad * 2,
    height: rect.height + pad * 2,
  }
  hole.right = hole.left + hole.width
  hole.bottom = hole.top + hole.height

  /* four blurred panels framing the hole */
  const panel = (style) => <div className="tour__panel" style={style} />
  const panels = (
    <>
      {panel({ top: 0, left: 0, width: '100vw', height: hole.top })}
      {panel({ top: hole.bottom, left: 0, width: '100vw', height: Math.max(0, vh - hole.bottom) })}
      {panel({ top: hole.top, left: 0, width: hole.left, height: hole.height })}
      {panel({ top: hole.top, left: hole.right, width: Math.max(0, vw - hole.right), height: hole.height })}
    </>
  )

  /* tooltip card placement */
  const cardStyle = {}
  let placement = step.placement
  let arrow = 'none'
  if (placement === 'center') {
    // handled by a flex container
  } else if (placement === 'right') {
    let left = hole.right + 18
    if (left + CARD_W > vw - 12) { left = Math.max(12, hole.left - CARD_W - 18); arrow = 'right' } // flipped → arrow on right edge
    else arrow = 'left'
    let top = hole.top + hole.height / 2
    top = Math.min(Math.max(top, CARD_HALF + 12), vh - CARD_HALF - 12)
    cardStyle.left = left
    cardStyle.top = top
    cardStyle.transform = 'translateY(-50%)'
  } else if (placement === 'left') {
    const left = Math.max(12, hole.left - CARD_W - 18)
    let top = hole.top + hole.height / 2
    top = Math.min(Math.max(top, CARD_HALF + 12), vh - CARD_HALF - 12)
    cardStyle.left = left
    cardStyle.top = top
    cardStyle.transform = 'translateY(-50%)'
    arrow = 'right'
  } else if (placement === 'bottom') {
    let left = hole.left
    if (left + CARD_W > vw - 12) left = vw - CARD_W - 12
    left = Math.max(12, left)
    cardStyle.left = left
    cardStyle.top = hole.bottom + 18
    arrow = 'top'
  }

  const card = (
    <div className={`tour__card tour__card--${placement}`} style={placement === 'center' ? undefined : cardStyle}>
      {arrow !== 'none' && <span className={`tour__arrow tour__arrow--${arrow}`} />}
      <div className="tour__head">
        {step.eyebrow && <span className="tour__eyebrow">{step.eyebrow}</span>}
        <h3 className="tour__title">{step.title}</h3>
      </div>
      <p className="tour__body">{step.body}</p>
      {step.points && (
        <ul className="tour__points">
          {step.points.map((p, i) => (
            <li key={i}><span className="ti"><Glyph html={p.icon} /></span><span>{p.text}</span></li>
          ))}
        </ul>
      )}
      <div className="tour__foot">
        <span className="tour__count">Step {step.group} of {TOUR_GROUPS}</span>
        <div className="tour__btns">
          {index > 0 && <button className="tour__btn ghost" onClick={prev}>Back</button>}
          <button className="tour__btn primary" onClick={next}>{last ? 'Finish' : 'Next'}</button>
        </div>
      </div>
    </div>
  )

  return createPortal(
    <div className="tour">
      {panels}
      <div className="tour__ring" style={{ top: hole.top, left: hole.left, width: hole.width, height: hole.height, borderRadius: step.radius ?? 12 }} />
      {placement === 'center'
        ? <div className="tour__center">{card}</div>
        : card}
    </div>,
    document.body
  )
}
