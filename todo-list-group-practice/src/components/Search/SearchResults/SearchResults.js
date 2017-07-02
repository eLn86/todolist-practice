import React, {PropTypes} from 'react';

// Import static files
import './SearchResults.css';


export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className= "row searchResultsRow">
        <div className="col-md-12 searchResults">
          <h3 className="taskName">BLORG</h3>
          <input type="checkbox" className="taskCheckBox"/>
        </div>
      </div>
    );
  }
}
