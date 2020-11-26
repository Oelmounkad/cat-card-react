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
     
  }

    return (
      <>
      <Header back />
        <section class="container">
        <h2>Cat card form</h2>
        <hr />
        <form onSubmit={onSubmit}>
          <div class="form-group row">
            <label for="cardTitle" class="col-sm-2 col-form-label">Card title</label>
            <input type="text" name="title" required class="form-control col-sm-10" id="cardTitle" placeholder="Card title" value={title} onChange={onChange} />
            <div class="invalid-feedback offset-md-2 col-sm-10">
              That field is required. Please provide a value.
            </div>
          </div>
          <div class="form-group row">
            <label for="cardImage" class="col-sm-2 col-form-label">Card image URL</label>
            <input type="url" name="imageUrl" required class="form-control col-sm-10" id="cardImage" placeholder="Card image URL" value={imageUrl} onChange={onChange} />
            <div class="invalid-feedback offset-md-2 col-sm-10">
              That field is required and attempt an URL as value. Please provide a value that respect URL format.
            </div>
          </div>
          <div class="form-group row">
            <label for="cardDescription" class="col-sm-2 col-form-label">Card description</label>
            <textarea class="form-control col-sm-10" id="cardDescription" name="description" value={description} onChange={onChange}></textarea>
          </div>
          <button class="btn btn-danger">Delete</button>
          <input type="submit" class="btn btn-primary" value="Save" />
        </form>
      </section>
      </>
    )
}

export default AddForm
