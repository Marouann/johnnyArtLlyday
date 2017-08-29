import React from 'react'

class Debile extends React.Component{
    constructor(props){
        super(props);
    }

    clicImg(id){
        var sound = document.getElementById("audio"+id);
        sound.play();
        this.props.f(id);
    }

    render(){
        return(
            <div className="col-md-3 debile mx-auto">
                <audio id={"audio"+this.props.debile.id} preload="auto" src={this.props.debile.son}/>
                <center>
                <a href="#overlay"><img id={"img"+this.props.debile.id}className={"img-responsive imgdeb imgdeb"+((this.props.debile.id)%4)} src={this.props.debile.image} onClick={() => this.clicImg(this.props.debile.id)} /></a>
                </center>
            </div>
        );
    }
}

export default Debile