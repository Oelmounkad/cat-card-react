import React from 'react'

const Header = ({back}) => {
    return (
        <header class="bg-primary">
        <h1 class="text-white text-center p-3">Cat card app</h1>
        {back && <a href="/" class="btn btn-primary back-btn"><i class="fas fa-caret-left mr-2"></i>Back</a>}
      </header>
    )
}

export default Header
