import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div id="header" className="col-md-12 text-center">
          <div className="bandeblanche"></div>
          <h1> LA BOITE À DÉBILES </h1>
          <div className="bandeblanche"></div>
        </div>
      </div>
    );
  }
}

export default Header