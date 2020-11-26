import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light">
        <div className="container text-center">
          <i className="far fa-copyright mr-1"></i><label> {new Date().getFullYear()} - Lille 1</label>
          <span className="small font-italic infos">No cat has been hurt during the development of this app.</span>
        </div>
      </footer>
    )
}

export default Footer
