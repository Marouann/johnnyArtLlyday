import React from 'react'
import Debile from "./debile.js"


class Rugbeux extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="listDebile" className="row">
                {this.props.rugbeux.map( (debile) => <Debile debile={debile} f={this.props.f} />)}
            </div>
        );
    }
}

export default Rugbeux