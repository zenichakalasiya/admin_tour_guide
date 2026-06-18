# Motadata ITSM — Admin Settings (React + Vite)

Prototype of the Admin Settings hub: icon rail, settings sidebar with search,
Overview page, module detail pages, and sub-settings — faithful to the design system
(colors, typography, spacing, radius, iconology).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Structure

```
index.html              Vite entry
vite.config.js
src/
  main.jsx              React root
  App.jsx               state + navigation orchestration
  index.css             design tokens + all component styles
  components/
    Rail.jsx            left icon rail
    Sidebar.jsx         search + nav tree wrapper
    Search.jsx          rotating placeholder + Recently Used
    NavTree.jsx         recursive sectioned nav with expandable groups
    Card.jsx            module card (Overview / collapsible sections)
    Tag.jsx             New / Update pills with tooltips
    Topbar.jsx          floating top action bar
    Tooltip.jsx         global [data-tip] tooltip
    Glyph.jsx           inline-SVG renderer
  pages/
    Overview.jsx        Frequently Used + Need Your Attention + collapsibles
    Workflow.jsx        module detail table
    EventNotification.jsx  tabbed toggle table + pagination
    Generic.jsx         placeholder for not-yet-built modules
  data/                 nav tree, rail, card content, table rows, icons
```

## Next

A guided **tour** for the Admin Settings page is the upcoming feature (spotlight +
stepped tooltips across Overview → module → sub-setting).
