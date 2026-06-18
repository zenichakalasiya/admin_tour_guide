/* Placeholder page for modules whose detailed UI isn't built yet. */
export default function Generic({ node }) {
  return (
    <div className="page">
      <div className="page__head">
        <h1 className="page__title">{node.label}</h1>
        <p className="page__sub">Configure and manage {node.label.toLowerCase()} settings for your ITSM platform.</p>
      </div>
      <div className="sec">
        <div className="collapse is-open">
          <div className="collapse__head">
            <div>
              <h3>{node.label}</h3>
              <p>This module is part of the Admin settings hub. Detailed configuration UI goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
