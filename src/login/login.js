import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

import DataService from "../services/data-service";
import HttpService from '../services/http-service';
// import Home from '../home/home';
// import Input from '../common/input';
import './login.css';
import Toastr from 'toastr';
import Home from '../home/home';

// import '../node_modules'

const http = new HttpService;
let ds = new DataService;

const LoginContext = React.createContext();

class Login extends Component{
                
    constructor() {
        super();

        this.state = {user:[], userName:'', login: {userIdInput: '', passwordInput: ''}, formRedirect: false};

    }

    componentDidMount(){
        // this.setState({userIdInput:'', passwordInput:''});
        // this.loadData();
    }

    loadData = () => {
        let self = this;
        // let listUser;
        // console.log(this.state.inputSearch);
        http.getApi("usuario/" + this.state.login.userIdInput + "/" + this.state.login.passwordInput)
        .then(
            data => {
            //self.setState({ user: data });//data.recordset si es con node
            // self.setState({userName: self.state.user.Nombre});
            // listUser = self.state.user.map(user=>user.Nombre);
                this.setState({userName: data.Nombre});//self.state.user.map(user=>user.userName)
                
                if (this.state.userName !== undefined) {
                    this.setState({formRedirect:true});
                }else{
                    Toastr.warning("Login incorrecto, por favor verifique.");
                }
            },
            er => {}
        );

        // return (listUser);
    };

    handleInput(event){
        let value = event.target.value;
        let name = event.target.name;
        let login = this.state.login;

        login[name] = value;

        this.setState({login});
        // console.log(login);
    }

    
    FormIsValid(){        
        
        // this.setState({isValid:true});
        let isValid = true;
        
        if (this.state.login.passwordInput.length === 0){
            isValid = false;
            Toastr.warning("Clave incorrecta, por favor verifique.");
        }
        if (this.state.login.userIdInput.length === 0){
            isValid=false;
            Toastr.warning("Usuario incorrecto, por favor verifique.");
         }

        return (isValid);

        // event.preventDefault();
    }

    FormAccept(event){
        event.preventDefault();
        
        if (!this.FormIsValid()){
            return;
        }
        // console.log(this.loadData());

        this.loadData();      
        // console.log(this.state.userName);
        // let listUser = this.state.user.map(user=>user.Nombre);
        // console.log(listUser);
        // this.setState({formRedirect:false});

        // this.state.user.map(user=>{console.log(user.Nombre)});
        // console.log(this.user.Nombre);
        
    }
   
    render(){
        // let wrapperClass = "";
        // if (this.state.login.userIdInput.length === 0) {
        //     wrapperClass = "has-danger";
        // }

        // if (this.state.isValid == false && this.state.login.passwordInput.length === 0) {
        //     wrapperClass += " has-danger";
        // }
        return(
            <div className="container login-container">
                <div>
                    <form className="login-form">
                        <h3 className="loginhead"><i className="fa fa-desktop"></i> Web Billing System</h3>
                        
                        <div className= "form-group left icon-login input">
                            <i className="fas icon-login fa-user"></i>
                            <div>
                                <input type="text" className="form-control" name='userIdInput' value={this.state.userIdInput}
                                placeholder="Usuario" onChange={this.handleInput.bind(this)}/>
                            </div>
                        </div>

                        <div className= "form-group left icon-login input">
                            <i className="fas icon-login fa-lock"></i>
                            <div>
                                <input type="password" className="form-control" name="passwordInput" value={this.state.passwordInput}
                                placeholder="Clave" onChange={this.handleInput.bind(this)}/>
                            </div>
                            
                        </div>
                        <div className="row" >
                            <div className="col-6">
                                <a href="#" className="font-size-text" data-toggle="modal" 
                                data-target="#loginRecuperarClaveModal">Olvidó su clave</a>
                            </div>
                            
                            <div className="col-4">
                                <button className="btn btn-primary btn-login" onClick={this.FormAccept.bind(this)}>Aceptar 
                                <i className="fas fa-arrow-right"></i>
                                </button>
                                {this.state.formRedirect && (
                                    // <LoginContext.Provider value={this.state.userName}>
                                        
                                        <Redirect to='/home'/>
                                    // </LoginContext.Provider>
                                )}
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
