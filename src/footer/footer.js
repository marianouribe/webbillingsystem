import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" >
            <div className="row">
                <div className="col-sm-3">
                    <i className="far fa-copyright"/><span className="text-muted"> CopyRigth 2018.</span>
                </div>
                {/* <div className="col-sm-3">
                    <i className="fab fa-whatsapp"/><span className="text-muted"> 849-849-0385.</span>
                </div> */}
                <div className="col-sm-3">
                    <i className="far fa-envelope"/><span className="text-muted"> umariano@hotmail.com.</span>
                </div>
            </div>
        </footer>
      </div>
    )
  }
};

export default Footer;
