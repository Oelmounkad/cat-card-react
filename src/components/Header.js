import React from 'react'
import {Link} from 'react-router-dom'
const Header = ({back}) => {
    return (
        <header class="bg-primary">
        <h1 class="text-white text-center p-3">Cat card app</h1>
        {back && <Link to="/"> <button class="btn btn-primary back-btn"><i class="fas fa-caret-left mr-2"></i>Back</button></Link>}
      </header>
    )
}

export default Header
