import React from 'react'
import { Link } from 'react-router-dom'

// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {
  return (
    <div className='row my-4'>
      <form className=' col-6 col-md-4 mx-auto my-4 rounded border border-4 p-4'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div className="row">
          <button type="submit" class="btn btn-primary col offset-1">Submit</button>
          <Link className="btn btn-secondary col offset-1 " to='/register'>Registrarse</Link>
        </div>

      </form>
    </div>
  )
}
