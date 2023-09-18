import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";

const CitasEditar = () => {

    const navigate = useNavigate();

    const { idCita } = useParams();
    let arreglo = idCita.split('@');
    const nombrePaciente = arreglo[1];
    const fecha_actual = arreglo[2];
    const hora_actual = arreglo[3];
    const ips_actual = arreglo[4];


    const [cita, setCita] = useState({
        full_name: nombrePaciente,
        fecha: fecha_actual,
        hora: hora_actual,
        ips: ips_actual
    });

    const { full_name, fecha, hora, ips } = cita;

    useEffect(() => {
        document.getElementById("full_name").focus();
    }, []);


    const onChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    const editarCita = async () => {
        let arreglo = idCita.split('@');
        const idC = arreglo[0];

        const data = {
            full_name: cita.full_name,
            fecha: cita.fecha,
            hora: cita.hora,
            ips: cita.ips
        }

        const response = await APIInvoke.invokePUT(`/Citas/${idC}`, data);
        const idCitaEditada = response.id;
        console.log(idCitaEditada)
        console.log(idC)

        if (idCitaEditada !== idC) {
            navigate("/listar-citas");
            const msg = `La cita con el id ${idCitaEditada} se edito correctamente`;
            swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
        } else {
            const msg = 'La cita no se edito correctamente.'
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editarCita();
    }

    return ( 
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Edición de citas"}
                    breadCrumb1={"Listado de citas"}
                    breadCrumb2={"Creación"}
                    ruta1={"/listar-citas"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Editar una cita</h3>

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
                            <form onSubmit={onSubmit}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="full_name">Nombre paciente</label>
                                        <input type="text"
                                            className="form-control"
                                            id="full_name"
                                            name="full_name"
                                            placeholder="Ingrese nombre"
                                            value={full_name}
                                            onChange={onChange}
                                            required />

                                        <label>Fecha actual</label>
                                        <input className="form-control" value={fecha} readOnly/>

                                        <label htmlFor="fecha">Fecha</label>
                                        <input type="date"
                                            className="form-control"
                                            id="fecha"
                                            name="fecha"
                                            value={fecha}
                                            onChange={onChange}
                                            required />

                                        <label>Hora actual</label>
                                        <input className="form-control" value={hora} readOnly/>

                                        <label htmlFor="hora">Hora</label>
                                        <input type="time"
                                            className="form-control"
                                            id="hora"
                                            name="hora"
                                            value={hora}
                                            onChange={onChange}
                                            required />

                                        <label>IPS actual</label>
                                        <input className="form-control" value={ips} readOnly/>

                                        <label htmlFor="ips">IPS</label>
                                        <select className="form-control" name="ips" value={ips} onChange={onChange} required>
                                            <option></option>
                                            <option>Juan Pablo II I.P.S S.A.S</option>
                                            <option>Hospital Infantil los Ángeles</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default CitasEditar;