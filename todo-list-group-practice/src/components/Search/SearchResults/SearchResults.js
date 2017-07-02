import React, {PropTypes} from 'react';

// Import static files
import './SearchResults.css';


export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className= "row">
        <div className="col-md-12 searchResults">
          <span>BLORG</span>
          <span>BLORG</span>
          <span>BLORG</span>
        </div>
      </div>
    );
  }
}
