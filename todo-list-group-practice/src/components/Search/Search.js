import React, {PropTypes} from 'react';

// Import components
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';

// Import static files
import './Search.css';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row searchContainer">
        <div className="col-md-12 searchBox">

            <SearchBar/>

            <SearchResults/>


        </div>
      </div>
    );
  }
}
