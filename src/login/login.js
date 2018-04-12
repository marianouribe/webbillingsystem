import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import './login.css';

// import '../node_modules'

class Login extends Component{
                
        constructor() {
            super();
            
        //this.setState({userIdInput:this.props.userIdInput});
        //    var userIdInput = document.getElementById('userIdInput');
            this.state = {userIdInput: '', userIdBorderInput: '', passwordInput: '', passwordPasswordInput: ''};
            this._buttonClick = this._buttonClick.bind(this);
       }

    _handleUserIdChange(event){
        this.setState({userIdInput: event.target.value});
        // console.log(event.target.value);
    }

    _handlePasswordChange(event){
        this.setState({passwordInput: event.target.value});
    }

    _buttonClick = (event)=> {        

       const bordercolor  = "form-control ";
        
        if (this.state.userIdInput === ''){
            this.setState({userIdBorderInput: bordercolor + "valida-border-danger"});
        }else {
            this.setState({userIdBorderInput: bordercolor + "valida-border-succes"});
        }
        
        if (this.state.passwordInput === ''){
            this.setState({passwordPasswordInput: bordercolor + "valida-border-danger"});
        }else {
            this.setState({passwordPasswordInput: bordercolor + "valida-border-succes"});
        }

        ReactDOM.render(<BrowserRouter><Home /></BrowserRouter> , document.getElementById('root'));
 
        if (this.state.userIdInput !== '' && this.state.passwordInput  !== ''){
                ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, document.getElementById('root'));
        }
        event.preventDefault();
    }

    componentDidMount(){
        this.setState({userIdBorderInput: "form-control valida-border-succes",
        passwordPasswordInput: "form-control valida-border-succes" ,userIdInput:'',passwordInput: ''});
    }

    componentWillMount(){
        this.setState({userIdBorderInput: "form-control valida-border-succes",
        passwordPasswordInput: "form-control valida-border-succes" ,userIdInput:'',passwordInput: ''});
    }
    
    render(){
        return(
            <div className="container login-container">
                <div>
                    <form className="login-form">
                        <h4 className="loginhead"><i className="fa fa-desktop"></i> Web Billing System</h4>
                        <div className="form-group left icon-login input">
                            <span className="input-group-lg"><i className="fas icon-login fa-user"></i></span>
                            
                            <input type="text" className={this.state.userIdBorderInput} id='userIdInput'
                            placeholder="Usuario" onChange={this._handleUserIdChange.bind(this)}/>
                        </div>
                        <div className="form-group left icon-login input">
                            <i className="fas icon-login fa-lock"></i>
                            <input type="password" className={this.state.passwordPasswordInput} id="passwordInput" 
                            placeholder="Clave" onChange={this._handlePasswordChange.bind(this)}/>
                        </div>
                        <div className="row" >
                            <div className="col-6">
                                <a href="#" className="font-size-text" data-toggle="modal" 
                                data-target="#loginRecuperarClaveModal">Olvidó su clave</a>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary btn-login" 
                                onClick = {this._buttonClick}>Aceptar <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <hr/>
                
                        <div className="row" >
                            <div className="col-6">
                                <label className="font-size-text">Necesitas Una Cuenta?</label>
                            </div>
                            <div className="col-4">
                                <button type="button" className="btn btn-outline-primary btn-login-outline"  data-toggle="modal" 
                                data-target="#loginSolicitarAccesoModal">Crear Cuenta</button>
                            </div>
                        </div>
                    </form>      
                </div>
                
                <div className = "modal fade" id = "loginSolicitarAccesoModal" role = "dialog" 
                aria-labelledby = "loginSolicitarAccesoLabel" aria-hidden = "true" > 
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
                                                        <label>Usuario</label>
                                                        <input type="text" className="form-control" id="formUserId" 
                                                        placeholder="Id de usuario"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Nombre</label>
                                                        <input type="text" className="form-control" id="formUserName" 
                                                        placeholder="Nombre de usuario"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" id="formUserEmail" 
                                                        placeholder="Email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Clave</label>
                                                        <input type="password" className="form-control" id="formUserPassword"
                                                            placeholder="Clave"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Confirmar Clave</label>
                                                        <input type="password" className="form-control" id="formUserPassowrdConfirm" 
                                                        placeholder="Confirmación de Clave"/>
                                                    </div>
                                                </form>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                                    <button type="button" className="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "modal fade" id = "loginRecuperarClaveModal" role = "dialog" 
                aria-labelledby = "loginRecuperarClaveLabel" aria-hidden = "true" > 
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <i className = "fas fa-key fa-2x"></i> 
                                </div>
                                <h5 className="modal-title" id="loginContentLabel">Recuperar Clave</h5>
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
                                                        <label>Usuario</label>
                                                        <input type="text" className="form-control" id="UserRecuperaClave" 
                                                        placeholder="Id de usuario"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" id="EmailRecuperaClave" 
                                                        placeholder="Email"/>
                                                    </div>
                                                </form>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                                    <button type="button" className="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            // <!-- Modal -->

            // <!-- login Solicitar Acceso Modal -->
            
        );
    }
}

export default Login;
