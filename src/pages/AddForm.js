import React from 'react'
import Header from '../components/Header'

const AddForm = () => {
    return (
      <>
      <Header back />
        <section class="container">
        <h2>Cat card form</h2>
        <hr />
        <form novalidate class="was-validated">
          <div class="form-group row">
            <label for="cardTitle" class="col-sm-2 col-form-label">Card title</label>
            <input type="text" required class="form-control col-sm-10" id="cardTitle" placeholder="Card title" />
            <div class="invalid-feedback offset-md-2 col-sm-10">
              That field is required. Please provide a value.
            </div>
          </div>
          <div class="form-group row">
            <label for="cardImage" class="col-sm-2 col-form-label">Card image URL</label>
            <input type="url" required class="form-control col-sm-10" id="cardImage" placeholder="Card image URL" />
            <div class="invalid-feedback offset-md-2 col-sm-10">
              That field is required and attempt an URL as value. Please provide a value that respect URL format.
            </div>
          </div>
          <div class="form-group row">
            <label for="cardDescription" class="col-sm-2 col-form-label">Card description</label>
            <textarea class="form-control col-sm-10" id="cardDescription"></textarea>
          </div>
          <button class="btn btn-danger">Delete</button>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </section>
      </>
    )
}

export default AddForm
