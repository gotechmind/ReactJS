import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/CustomForms.js';
import ListControl from './components/ListControl.js';

class App extends Component {
  
  state = {
    names : [],
    text : ""
  }

  onAdd = () => {
    this.setState({names : [...this.state.names, this.state.text]});
    console.log(this.state);
  }

  onChange = (e) => {
    this.setState({names : this.state.names, text : e.target.value});
  }

  onDelete = (e) => {
    this.setState({names : this.state.names.filter(t => t !== e.target.textContent), text : this.state.text});
  }

  render = () => {
  return (
    <div>
    <Form state={this.state} onAdd={this.onAdd} onChange={this.onChange}/>
    <ListControl names={this.state.names} onDelete={this.onDelete}/>
    </div>
  );
  }
}

export default App;
