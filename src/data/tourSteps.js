/* ============================================================
   TOUR STEPS — 3 steps: Overview, Left Navigation, Search
   - target: CSS selector of the element to spotlight
   - placement: where the tooltip card sits (left | right | bottom | center)
   - radius / pad: shape of the spotlight hole
   - points: one-line scannable highlights { icon, text }
   ============================================================ */

/* small point icons */
const P = {
  doc:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3" stroke-linecap="round"/></svg>',
  compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" stroke-linejoin="round"/></svg>',
  spark:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.4 2.4M15.3 15.3l2.4 2.4M6.3 17.7l2.4-2.4M15.3 8.7l2.4-2.4" stroke-linecap="round"/></svg>',
  pin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="m12 3 9 5-9 5-9-5 9-5Z" stroke-linejoin="round"/><path d="m3 13 9 5 9-5" stroke-linejoin="round"/></svg>',
  split:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M11 4v16"/></svg>',
  bolt:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke-linejoin="round"/></svg>',
  globe:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>',
  clock:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg>',
}

/* header icon chips */
const H = {
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" stroke-linejoin="round"/><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" stroke-linejoin="round"/></svg>',
  compass:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" stroke-linejoin="round"/></svg>',
  search:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" width="20" height="20" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
}

export const TOUR_STEPS = [
  {
    id: 'overview',
    group: 1,
    target: '[data-tour="content"]',
    placement: 'left',
    pad: 0,
    radius: 0,
    chip: H.sparkles,
    eyebrow: 'Welcome',
    title: 'A whole new Admin experience',
    body: 'We rebuilt Admin Settings — cleaner navigation, modules grouped by purpose, and a clear description on every setting, so the old complexity is sorted for you.',
    points: [
      { icon: P.doc,    text: 'Clear description on every setting' },
      { icon: P.compass,text: 'Simpler, easier to navigate' },
    ],
  },
  {
    id: 'nav',
    group: 2,
    target: '[data-tour="nav"]',
    placement: 'right',
    pad: 10,
    radius: 12,
    chip: H.compass,
    title: 'Navigate everything from one place',
    body: 'The left navigation is always here, on every page. Switch between settings instantly — no more back-and-forth.',
    points: [
      { icon: P.layers, text: 'Grouped into clear sections' },
      { icon: P.pin,    text: 'Always visible, never lost' },
    ],
  },
  {
    id: 'search',
    group: 3,
    target: '[data-tour="search"]',
    placement: 'right',
    pad: 8,
    radius: 10,
    chip: H.search,
    title: 'Search, now with intent',
    body: 'Search has a new permanent home up top. Search by what you want to do — from anywhere in Admin.',
  },
]

export const TOUR_GROUPS = 3
