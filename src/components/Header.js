import React from 'react'
import {Link} from 'react-router-dom'
const Header = ({back}) => {
    return (
        <header className="bg-primary">
        <h1 className="text-white text-center p-3">Cat card app</h1>
        {back && <Link to="/"> <button className="btn btn-primary back-btn"><i className="fas fa-caret-left mr-2"></i>Back</button></Link>}
      </header>
    )
}

export default Header
