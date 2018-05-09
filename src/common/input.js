import React from 'react';

class Input extends React.Component{
    render(){
        return(
        <div>
            <label htmlFor={this.props.name} className="form-control-label">{this.props.label}</label>
            <div className="field">
                <input type="text" className="form-control" name={this.props.name} value={this.props.value} 
                placeholder={this.props.placeholder} onChange={this.props.onChange}/>
            </div>
            <div className="text-danger"></div>
        </div>
        );
    }
}

export default Input;