import React, { Component } from 'react';

// Import Create CSS
import './Create.css'

class Create extends Component {
  render() {
    return (
      <div className="row createTaskRow">
        <div className="col-md-12">
        <input className="taskName input-lg"
               type= "text"/>
          <button className="btn btn-lg btn-primary">Create Task</button>
        </div>
      </div>
    );
  }
}

export default Create;
