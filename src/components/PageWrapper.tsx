import React from 'react'

type Props = {
  id: string,
  className?: string,
  children?: React.ReactNode,
}

const PageWrapper: React.FunctionComponent<Props> = (props) => (
  <div className={`page page--${props.id} ${props.className ?? ''}`}>
    <div className="center">
      {props.children}
    </div>
  </div>
)

export default PageWrapper
