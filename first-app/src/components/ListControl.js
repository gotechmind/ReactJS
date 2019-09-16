import React, { Component } from 'react';

class ListControl extends Component {

    render = () => { return (
    <div>
      <ul className="list-group">
          {this.props.names.map((name) => <li className="list-group-item" key={name} onClick={this.props.onDelete}>{name}</li>)}
      </ul>
    </div>);
   }
}

export default ListControl;