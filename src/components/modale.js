import React from 'react'

class Modale extends React.Component{
    constructor(props){
        super(props);
    }

    stopSon(id){
        var sound = document.getElementById("audio"+id);
        sound.pause();
        sound.currentTime=0;
    }

    render(){
        return(
            <div id="overlay">
                <div className="popup_block">
                    <a className="close" href="#noWhere" onClick={() => this.stopSon(this.props.modaleId)}>X</a>
                    <h4>{this.props.rugbeux[this.props.modaleId].prenom} {this.props.rugbeux[this.props.modaleId].nom}, surnommé :</h4>
                    <h1>{this.props.rugbeux[this.props.modaleId].surnom}</h1>
                    <div className="description">
                        <h3> Description </h3>
                        <p> {this.props.rugbeux[this.props.modaleId].description} </p>
                        <center>
                            <img src={this.props.rugbeux[this.props.modaleId].imageG} />
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modale