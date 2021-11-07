import React from 'react'

export const Header = ({children}) => {
  return (
    <header className="header">
      <div className="container-fluid border-1 dark-bg">
        { children }
      </div>
    </header>
  )
}
