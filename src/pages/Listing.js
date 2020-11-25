import React,{useContext} from 'react'
import CatContext from '../context/CatContext'
import Card from '../components/Card'
const Listing = () => {

    const catContext = useContext(CatContext)
    const {cards} = catContext


    return (
        <section class="container">
        <h2>Cat card list</h2>
        <hr />
    {cards.map(c => <Card card={c} />)}
        <button class="btn btn-lg btn-danger circle add"><i class="fas fa-plus"></i></button>
      </section>
    )
}

export default Listing
