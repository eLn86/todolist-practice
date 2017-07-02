import React, {PropTypes} from 'react';

// Import static files
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className= "row">
        <div className="col-md-12 searchBar">
          <input type='string'/>
          <button className= 'btn btn-lg btn-primary'type='submit'>DO THE THING</button>
        </div>
      </div>
    );
  }
}
