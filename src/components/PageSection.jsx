import React from 'react'

import './PageSection.css'

function PageSection(props) {
  return (
    <section id={props.id} className={"page-section " + props.className}>
      {props.children}
    </section>
  )
}

export default PageSection