import React from 'react';

class Search extends React.Component{
    render(){
        
        return <div className="mt-2">
            <label htmlFor={this.props.name} className="font-weight-bold"> {this.props.label} </label>
            <input type="search" className="form-control d-inline w-50 ml-1 mb-3" name={this.props.name}
                value={this.props.inputSearch} onChange={this.props.setSearch.bind(this)} />

            <button className="btn btn-outline-primary ml-1" onClick={this.props.onButtonBuscar.bind(this)}>
              Buscar
            </button>

            <label className="ml-2">Mostrar</label>
            <select value={this.props.valueSelect} onChange={this.props.setValueSelect.bind(this)} className="form-control custom-select-amount d-inline ml-2">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            <label className="ml-2">registros</label>
          </div>;
    }
}

export default Search;