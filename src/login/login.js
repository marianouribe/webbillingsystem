import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from '../App/logo.svg';
// import logo from '../assets/Logo.png';
import './login.css';

import Menu from '../menu/menu';

// import rgSrvWorker from '../registerServiceWorker';

class Login extends Component{
        
        
        constructor(props) {
            super(props);
            
        //this.setState({userIdInput:this.props.userIdInput});
        //    var userIdInput = document.getElementById('userIdInput');
            this._buttonClick = this._buttonClick.bind(this);
            this.state = {userIdInput: ''};
            this.state = {userIdBorderInput: ''};
            this.state = {passwordInput: ''};
            this.state = {passwordPasswordInput: ''};
            
           
       }

    _handleUserIdChange=(event)=>{
        this.setState({userIdInput: event.target.value});
        // console.log(event.target.value);
    }

    _handlePasswordChange=(event)=>{
        this.setState({passwordInput: event.target.value});
        // console.log(event.target.value);
    }
// var userIdInput = document.getElementById('userIdInput');
// var passwordInput = document.getElementById('passwordInput');
    _buttonClick= (event)=> {
        
        // var userIdInput = document.getElementById('userIdInput');
        // var passwordInput = document.getElementById('passwordInput');
        console.log(this.state.userIdInput);
        
        if (this.state.userIdInput === ''){
            this.setState({userIdBorderInput: "form-control valida-border-danger"});
        }else {
            this.setState({userIdBorderInput: "form-control valida-border-succes"});
        }
        
        if (this.state.passwordInput === ''){
           this.setState({passwordPasswordInput: "form-control valida-border-danger"});
        }else {
            this.setState({passwordPasswordInput: "form-control valida-border-succes"});
        }

        ReactDOM.render(<Menu />, document.getElementById('root'));
 
        if (this.state.userIdInput !== '' || this.state.passwordInput  !== ''){
            
                ReactDOM.render(<Menu />, document.getElementById('root'));
                // console.log(this.state.userIdInput);
                // console.log(this.state.passwordInput);
            
        }
        event.preventDefault();
    }

    componentDidMount(){
        this.setState({userIdBorderInput: "form-control valida-border-succes"});
        this.setState({passwordPasswordInput: "form-control valida-border-succes"});
        this.setState({userIdInput:''});
        this.setState({passwordInput: ''});
    }

    componentWillMount(){
        this.setState({userIdBorderInput: "form-control valida-border-danger"});
        this.setState({passwordPasswordInput: "form-control valida-border-danger"});
        this.setState({userIdInput:''});
        this.setState({passwordInput: ''});
    }
    
    render(){
      

        // var var Apph;;

        // if (this.props.userIdInput === ""){
        //     loginform = "login-form has-danger";
        // }else {
        //     loginform = "login-form";
        // }

        // <img src={logo} className="img-fluid login-img"/>

        return(
            <div className="container login-container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-sd-12 col-md-4">
                        <div className="brand fa fa-desktop"> Web Billing System</div>
                        <div className="card login-card">
                            <div className="card-block">
                                <form className="login-form">
                                    <div className="form-group left icon-login input">
                                        <span className="input-group-lg"><i className="fas icon-login fa-user"></i></span>
                                        <input type="text" className={this.state.userIdBorderInput} id='userIdInput'
                                        placeholder="Usuario" onChange={this._handleUserIdChange}/>
                                    </div>
                                    <div className="form-group left icon-login input">
                                        <i className="fas icon-login fa-lock"></i>
                                        <input type="password" className={this.state.passwordPasswordInput} id="passwordInput" 
                                        placeholder="Clave" onChange={this._handlePasswordChange}/>
                                    </div>
                                    <button className="btn btn-md btn-primary btn-block" 
                                    onClick = {this._buttonClick.bind(this)}>Aceptar</button>
                                    
                                </form>
                            </div>
                        </div>
                        <br/>
                        <div className="card login-card-acceso">
                            <div className="row" >
                                <div className="col-6">
                                    <a href="#" className="login-create-new-access"
                                    data-toggle="modal" data-target="#loginSolicitarAccesoModal">Solicitar Acceso</a>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="login-create-new-access">Cambiar Clave?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
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
            </div>


            // <!-- Modal -->

            // <!-- login Solicitar Acceso Modal -->
            
        );
    }
}

export default Login;
