import React from 'react'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Register = () => {
  return (
    <div className='row my-4'>
      <form className=' col-6 col-md-4 mx-auto my-4 rounded border border-4 p-4'>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" aria-describedby="username"/>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónicos</label>
          <input type="email" class="form-control" id="email" aria-describedby="email"/>
            <div id="email" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Registrarse</button>
      </form>
    </div>
  )
}
