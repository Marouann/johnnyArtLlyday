import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div id="header" className="col-md-12 text-center">
          <div className="bandeblanche" />
          <img className="logo" src="/public/images/logo.png" />
        </div>
      </div>
    );
  }
}

export default Header