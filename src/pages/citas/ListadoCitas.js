import React from "react";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeader";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import data from "../../bbdd.json";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";

const ListadoCitas = () => {

    const navigate = useNavigate();

    const eliminarCita = async (e, idCita) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/Citas/${idCita}`); 
        console.log(response);
        swal({
            title: "Información",
            text: 'La cita fue cancelada correctamente',
            icon: "success",
            buttons: {
              confirm: {
                text: "Ok",
                value: true,
                visible: true,
                className: "btn btn-danger",
                closeModal: true,
              },
            },
          });
        // Redireccionar
        navigate("/listar-citas");
    }

    return ( 
        <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de citas"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Citas"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><Link to={"/proyectos-admin"} className="btn btn-block btn-primary btn-sm">Crear cita</Link></h3>

              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "5%" }}>Id</th>
                    <th style={{ width: "15%" }}>Nombre</th>
                    <th style={{ width: "10%" }}>Fecha</th>
                    <th style={{ width: "10%" }}>Hora</th>
                    <th style={{ width: "20%" }}>IPS</th>
                    <th style={{ width: "15%" }}>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {data.Citas.map((cita) => (
                    <tr key={cita.id}>
                      <td>{cita.id}</td>
                      <td>{cita.full_name}</td>
                      <td>{cita.fecha}</td>
                      <td>{cita.hora}</td>
                      <td>{cita.ips}</td>
                      <td>
                        <Link to={`/editar-cita/${cita.id}@${cita.full_name}@${cita.fecha}@${cita.hora}@${cita.ips}`} className="btn btn-sm btn-primary">Editar cita</Link> &nbsp; &nbsp; 
                        <button onClick={(e) => eliminarCita(e, cita.id)} className="btn btn-sm btn-danger">Cancelar cita</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
     );
}
 
export default ListadoCitas;