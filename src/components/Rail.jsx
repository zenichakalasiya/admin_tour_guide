import Glyph from './Glyph.jsx'
import { ICON } from '../data/icons.js'
import { RAIL } from '../data/rail.js'

const Logo = ({ size = 26, idSuffix = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke={`url(#rg${idSuffix})`} strokeWidth="3.2" />
    <circle cx="16" cy="6.5" r="2.4" fill="#2D6CDF" />
    <defs>
      <linearGradient id={`rg${idSuffix}`} x1="3" y1="3" x2="29" y2="29">
        <stop stopColor="#34C7C7" /><stop offset="1" stopColor="#2D6CDF" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Rail() {
  return (
    <aside className="rail">
      <div className="rail__logo" title="Motadata"><Logo idSuffix="1" /></div>
      <nav className="rail__nav">
        {RAIL.map((r, i) => (
          <button key={i} className={`rail__item ${r.active ? 'is-active' : ''}`} data-tip={r.t}>
            <Glyph html={ICON[r.ic]} />
          </button>
        ))}
      </nav>
      <div className="rail__bottom">
        <span className="rail__product">ITSM</span>
        <div className="rail__logo rail__logo--sm"><Logo size={22} idSuffix="2" /></div>
      </div>
    </aside>
  )
}
