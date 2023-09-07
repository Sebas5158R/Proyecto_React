import React from "react";
import { Link } from "react-router-dom";
import "../crearCuenta.css";

const data = [
  {id: 1, nombre: "Andrea", edad: 19, tipoDoc: "Cedula de ciudadania", numDoc: "106789564", telefono: "3103456789"},
  {id: 2, nombre: "Camilo", edad: 14, tipoDoc: "Tarjeta de identidad", numDoc: "109087657", telefono: "314090897"},
  {id: 3, nombre: "Andres", edad: 26, tipoDoc: "Cedula de ciudadania", numDoc: "105631245", telefono: "3116789040"},
  {id: 4, nombre: "Jose", edad: 18, tipoDoc: "Cedula de ciudadania", numDoc: "104587901", telefono: "3156789011"},
];

class CrearCuenta extends React.Component {
  state = {
    data: data,
    form: {
      id: "",
      nombre: "",
      edad: "",
      tipoDoc: "",
      numDoc: "",
      telefono: "",
    },
    modalOpen: false
  };

  // For update the list
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  // For open modal
  openModal = () => {
    this.setState({ modalOpen: true });
  };

  // For close modal
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  // for open edit modal 
  openModalEdit = (registro) => {
    this.setState({ modalOpen: true, form: registro });
  }

  // For close edit modal
  closeModalEdit = () => {
    this.setState({ modalOpen: false });
  }

  // For insert a new user
  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista, modalOpen: false });
  };

  // For edit
  edit = (dato) => {
    var contador = 0;
    var lista = this.state.data;
    lista.map((registro) => {
      if(dato.id === registro.id) {
        lista[contador].nombre=dato.nombre;
        lista[contador].edad = dato.edad;
        lista[contador].tipoDoc = dato.tipoDoc;
        lista[contador].numDoc = dato.numDoc;
        lista[contador].telefono = dato.telefono;
      }
      contador++;
    })
    this.setState({data: lista, modalOpen: false});
  }


  // For delete a register
  delete = (dato) => {
    var opcion = window.confirm("¿Seguro de querer eliminar este usuario?, "+dato.id);
    if(opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if(registro.id===dato.id) {
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({data: lista});
    }
  }

  render() {
    return (
      <div className="hold-transition register-page">
        <div className="table-container">
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre completo</th>
              <th>Edad</th>
              <th>Tipo de documento</th>
              <th>Número de documento</th>
              <th>Télefono</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((elemento) => (
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.edad}</td>
                <td>{elemento.tipoDoc}</td>
                <td>{elemento.numDoc}</td>
                <td>{elemento.telefono}</td>
                <td>
                  <button className="btn btn-block btn-primary" onClick={() => this.openModalEdit(elemento)}>Editar</button>
                  <button className="btn btn-block btn-danger" onClick={() => this.delete(elemento)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to={"/"} className="text-center">Salir</Link>
        </div>

        {/* For open modal (popup) */}
        <Link
          to={"#"}
          onClick={this.openModal}
          className="btn btn-block btn-primary"
        >
          Registrar
        </Link>
        {this.state.modalOpen && (
          <div className="modal-container">
            <div className="modal-content">
              <span className="close-modal" onClick={this.closeModal}>
                &times;
              </span>
              <div className="register-box">
                <div className="register-logo">
                  <Link to={"#"}>
                    <b>Registrarme</b>
                  </Link>
                </div>
                <div className="card">
                  <div className="card-body register-card-body">
                    <p className="login-box-msg">
                      Bienvenido, acá puedes crear a un usuario
                    </p>
                    <form action="../../index.html" method="post">
                      {/* Input for the id */}
                      <input
                        type="number"
                        name="id"
                        readOnly
                        // value={this.state.data.length + 1}
                        value={this.state.form.id}
                      />

                      {/* Div for full name */}
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full name"
                          name="nombre"
                          onChange={this.handleChange}
                          value={this.state.form.nombre}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-user" />
                          </div>
                        </div>
                      </div>

                      {/* Div for age */}
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Age"
                          name="edad"
                          onChange={this.handleChange}
                          value={this.state.form.edad}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-user" />
                          </div>
                        </div>
                      </div>

                      {/* Div for document type */}
                      <div className="input-group mb-3">
                        <select name="tipoDoc" onChange={this.handleChange} value={this.state.form.tipoDoc}> 
                          <option>Cedula de ciudadania</option>
                          <option>Tarjeta de identidad</option>
                          <option>Pasaporte</option>
                        </select>
                      </div>

                      {/* Div for document number */}
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Document number"
                          name="numDoc"
                          onChange={this.handleChange}
                          value={this.state.form.numDoc}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-user" />
                          </div>
                        </div>
                      </div>

                      {/* Div for number phone */}
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number phone"
                          name="telefono"
                          onChange={this.handleChange}
                          value={this.state.form.telefono}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-user" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <div className="icheck-primary">
                            <input
                              type="checkbox"
                              id="agreeTerms"
                              name="terms"
                              defaultValue="agree"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="social-auth-links text-center">
                      <Link onClick={() => this.insertar()} className="btn btn-block btn-primary">
                        Guardar
                      </Link>

                      <Link onClick={() => this.edit(this.state.form)} className="btn btn-block btn-primary">
                        Editar
                      </Link>

                      <Link onClick={this.closeModal} className="btn btn-block btn-danger">
                        Cancelar
                      </Link>
                      </div>
                    </form>

                    <Link to={"/"} className="text-center">
                      ¿Ya tienes una cuenta?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CrearCuenta;
