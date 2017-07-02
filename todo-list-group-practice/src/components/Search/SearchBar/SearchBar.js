import React, {PropTypes} from 'react';

// Import static files
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className= "row searchBarRow">
        <div className="col-md-12 searchBar">
          <input type='string'
                 className="searchInput input-lg"/>
          <button className= 'btn btn-lg btn-primary'type='submit'>Search Tasks</button>
        </div>
      </div>
    );
  }
}
