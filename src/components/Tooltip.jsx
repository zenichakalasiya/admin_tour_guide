import { useEffect, useRef } from 'react'

/* Global tooltip: listens for hover on any [data-tip] element. */
export default function Tooltip() {
  const tipRef = useRef(null)

  useEffect(() => {
    const tip = tipRef.current
    let target = null

    const onOver = (e) => {
      const t = e.target.closest('[data-tip]')
      if (!t || t === target) return
      target = t
      tip.textContent = t.getAttribute('data-tip')
      const r = t.getBoundingClientRect()
      tip.classList.add('show')
      const tw = tip.offsetWidth
      let x = r.left + r.width / 2 - tw / 2
      x = Math.max(8, Math.min(x, window.innerWidth - tw - 8))
      tip.style.left = `${x}px`
      tip.style.top = `${r.top - tip.offsetHeight - 8}px`
      tip.style.setProperty('--ax', `${r.left + r.width / 2 - x}px`)
    }
    const onOut = (e) => {
      if (e.target.closest('[data-tip]') === target) { tip.classList.remove('show'); target = null }
    }

    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => { document.removeEventListener('mouseover', onOver); document.removeEventListener('mouseout', onOut) }
  }, [])

  return <div className="tip" ref={tipRef} />
}
