import React from 'react'

class Mystere extends React.Component{
    constructor(props){
        super(props);
    }

    clicImg(){
        var min = Math.ceil(0);
        var max = Math.floor(this.props.rugbeux.length);
        var rand = Math.floor(Math.random() * (max - min +1)) + min;
        var id = this.props.rugbeux[rand].id
        var sound = document.getElementById("audio"+id);
        sound.play();
        this.props.f(id);
    }

    render(){
        return(
            <div className="col-md-3 debile mx-auto">
                <center>
                <a href="#overlay"><img id={"imgMystere"} className={"img-responsive imgdeb imgMy"} src="/public/images/random.png" onClick={() => this.clicImg()} /></a>
                </center>
            </div>
        );
    }
}

export default Mystere