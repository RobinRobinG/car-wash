import React, { useState } from 'react'
import Container from '../container/container'
import './collapsible.scss'

const Collapsible = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  const togglePanel = event => setOpen(!open)

  return (
    <div className="collapsible">
      <Container>
        <div
          role="button"
          className={`title ${open === true ? 'open' : 'close'}`}
          tabIndex={0}
          onMouseDown={togglePanel}
        >
          {title}
        </div>
        {open === true ? <div className="content">{children}</div> : null}
      </Container>
    </div>
  )
}

Collapsible.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default Collapsible
