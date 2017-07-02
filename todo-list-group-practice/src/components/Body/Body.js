import React, { Component } from 'react';

// Create Component by EL
import Create from '../Create/Create';
// Search Component by Han
import Search from '../Search/Search.js';

class Body extends Component {
  render() {
    return (
      <div className="row">
      <Create />
      <Search/>
      </div>
    );
  }
}

export default Body;
