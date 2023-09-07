import React from "react";
import { Link } from "react-router-dom";


const CrearCuenta = () => {

    return (
      <div class="hold-transition register-page">
          <div className="register-box">
  <div className="register-logo">
    <Link to={"#"}><b>Bienve</b>nido</Link>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Registrate, para poder continuar</p>

      {/* Form */}
      <form action="../../index.html" method="post">

        {/* Div for full name */}
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full name" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>

        {/* Div for email */}
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>

        {/* Div for document type */}
        <div className="input-group mb-3">
          <select>
            <option>Cedula de ciudadania</option>
            <option>Tarjeta de identidad</option>
            <option>Pasaporte</option>
          </select>
        </div>

        {/* Div for document number */}
        <div className="input-group mb-3">
          <input type="number" className="form-control" placeholder="Document number" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>

        {/* Div for password */}
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <Link to={"#"}>terms</Link>
              </label>
            </div>
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
        </div>
      </form>
      <div className="social-auth-links text-center">
        <p>- OR -</p>
        <Link to={"#"} className="btn btn-block btn-primary">
          Registrar
        </Link>
        <Link to={"/"} className="btn btn-block btn-danger">
          Cancelar
        </Link>
      </div>
      <Link to={"/"} className="text-center">¿Ya tienes una cuenta?</Link>
    </div>
  </div>
</div>

      </div>
      
    );
}

export default CrearCuenta;
