import React from 'react'
import Debile from "./debile.js"
import Mystere from "./mystere.js"


class Rugbeux extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="listDebile" className="row">
                <Mystere rugbeux={this.props.rugbeux} f={this.props.f} />
                {this.props.rugbeux.map( (debile) => <Debile key={debile.id} debile={debile} f={this.props.f} />)}
            </div>
        );
    }
}

export default Rugbeux