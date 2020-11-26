import React,{useContext} from 'react'
import CatContext from '../context/CatContext'
import Card from '../components/Card'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

const Listing = () => {

    const catContext = useContext(CatContext)
    const {cards} = catContext


    return (
        <>
        <Header />
        <section class="container">
        <h2>Cat card list</h2>
        <hr />
    {cards.map(c => <Card card={c} />)}
   <Link to="/add"><button class="btn btn-lg btn-danger circle add"><i class="fas fa-plus"></i></button></Link>   
      </section>
      </>
    )
}

export default Listing
