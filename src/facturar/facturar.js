import React, { Component } from "react";
import ReacDon from 'react-dom';
import './facturar.css';

class Facturar extends Component{
    
    render() {
        return (
            <div className = "modal fade" id = "handleFacturarModal" role = "dialog" 
                aria-labelledby = "handleFacturarLabel" aria-hidden = "true" > 
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <i className = "fas fa-user-plus fa-2x"></i> 
                                </div>
                                <h5 className="modal-title" id="loginContentLabel">Solicitar Acceso</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="modalFormWrapper">
                                                <form>
                                                    <div className="form-group">
                                                        <label for="formUserId">Usuario</label>
                                                        <input type="text" className="form-control" id="formUserId" 
                                                        placeholder="Id de usuario"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="formUserName">Nombre</label>
                                                        <input type="text" className="form-control" id="formUserName" 
                                                        placeholder="Nombre de usuario"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="formUserEmail">Email</label>
                                                        <input type="email" className="form-control" id="formUserEmail" 
                                                        placeholder="Email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="formUserPassword">Clave</label>
                                                        <input type="password" className="form-control" id="formUserPassword"
                                                            placeholder="Clave"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="formUserPassowrdConfirm">Confirmar Clave</label>
                                                        <input type="password" className="form-control" id="formUserPassowrdConfirm" 
                                                        placeholder="Confirmación de Clave"/>
                                                    </div>
                                                </form>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button type="button" className="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Facturar;
