import React, {PropTypes} from 'react';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
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
