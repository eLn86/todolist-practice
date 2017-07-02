import React, { Component } from 'react';

// Create Component by EL
import Create from '../Create/Create';
// Search Component by Han
import Search from '../Search/Search.js';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Task Array to handle all task rows
      tasks: []
    }
  }
  render() {
    var rows = this.state.tasks;
    return (
      <div className="row">
      <Search tasks={this.state.tasks}/>
      {rows}
      <Create />
      </div>
    );
  }
}

export default Body;
