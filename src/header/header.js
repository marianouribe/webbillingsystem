import React, { Component } from 'react';
// import './menu.css';

class Header extends Component {
  render() {
    return (
        <div className="header-custom">
            <div className="title-menu" id="header">
                <form className="form-inline navbar-right">
                    <div className="form-inline icon-search-custom input">
                        <i className="fas icon-search fa-search"></i>
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>                                
                    </div>
                </form>
            </div>
        </div>
    )
  }
};

export default Header;
