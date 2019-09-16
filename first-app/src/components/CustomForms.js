import React, { Component } from 'react';

class Form extends Component {

    render = () => { return (
    <div className="form-group">
      <label>Name</label>
      <input type="text" placeholder="Name" className ="form-control" onChange={this.props.onChange}/>
      <button  className="btn btn-primary" onClick={this.props.onAdd}>Add</button>
    </div>);
   }
}

export default Form;