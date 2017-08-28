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
            <div className="col-md-3 debile">
                <audio id={"audio"+this.props.debile.id} autoPlay="false" src={this.props.debile.son}/>
                <a href="#overlay"><img id={"img"+this.props.debile.id}className="img-responsive imgdeb" src={this.props.debile.image} onClick={() => this.clicImg(this.props.debile.id)} /></a>
            </div>
        );
    }
}

export default Debile