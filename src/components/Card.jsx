import Glyph from './Glyph.jsx'
import Tag from './Tag.jsx'
import { ICON, EXT } from '../data/icons.js'

/* Module card used on Overview + collapsible sections. */
export default function Card({ data, onNavigate }) {
  const { ic, name, desc, tag, prog, solid, link, go } = data

  let right = null
  if (tag) right = <Tag kind={tag} />
  else if (prog) {
    right = (
      <div className="prog">
        <div className="prog__bar"><i style={{ width: `${(prog[0] / prog[1]) * 100}%` }} /></div>
        <span className="prog__txt">{prog[0]}/{prog[1]}</span>
      </div>
    )
  }

  return (
    <div className="card" onClick={() => go && onNavigate(go)}>
      <div className="card__top">
        <span className={solid ? 'card__chip card__chip--solid' : 'card__chip'}>
          <Glyph html={ICON[ic]} />
        </span>
        <span className="card__name">{name}</span>
        {right}
      </div>
      <p className="card__desc">{desc}</p>
      {link && (
        <div className="card__foot">
          <a className="card__link linkext" onClick={(e) => { e.preventDefault(); e.stopPropagation(); go && onNavigate(go) }}>
            {link} <Glyph html={EXT} />
          </a>
        </div>
      )}
    </div>
  )
}
