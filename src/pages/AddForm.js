import React,{useState,useContext} from 'react'
import Header from '../components/Header'

import CatContext from '../context/CatContext'

const AddForm = () => {

const catContext = useContext(CatContext)
const {addCat} = catContext

  const [form, setForm] = useState({
    title: '',
    imageUrl: '',
    description: ''
  })
  const {title, imageUrl , description} = form

  const onChange = e => {
    setForm({...form, [e.target.name]: e.target.value} )
  }

  const onSubmit = e => {
      e.preventDefault()
      console.log('from FORM : '+form.title)
      addCat(form)
      setForm({
        title: '',
        imageUrl: '',
        description: ''
      })
     
  }

    return (
      <>
      <Header back />
        <section className="container">
        <h2>Cat card form</h2>
        <hr />
        <form onSubmit={onSubmit}>
          <div className="form-group row">
            <label htmlFor="cardTitle" className="col-sm-2 col-form-label">Card title</label>
            <input type="text" name="title" required className="form-control col-sm-10" id="cardTitle" placeholder="Card title" value={title} onChange={onChange} />
            <div className="invalid-feedback offset-md-2 col-sm-10">
              That field is required. Please provide a value.
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="cardImage" className="col-sm-2 col-form-label">Card image URL</label>
            <input type="url" name="imageUrl" required className="form-control col-sm-10" id="cardImage" placeholder="Card image URL" value={imageUrl} onChange={onChange} />
            <div className="invalid-feedback offset-md-2 col-sm-10">
              That field is required and attempt an URL as value. Please provide a value that respect URL format.
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="cardDescription" className="col-sm-2 col-form-label">Card description</label>
            <textarea className="form-control col-sm-10" id="cardDescription" name="description" value={description} onChange={onChange}></textarea>
          </div>
          <button className="btn btn-danger">Delete</button>
          <input type="submit" className="btn btn-primary" value="Save" />
        </form>
      </section>
      </>
    )
}

export default AddForm
