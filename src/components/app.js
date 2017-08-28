import React from 'react'
import Header from './header.js'
import Rugbeux from './rugbeux.js'
import Modale from './modale.js'

class App extends React.Component{

    modifModal(id){
        this.props.store.dispatch({type:'lireModal',modalId:id})
    }

    render(){
        var rugbeux = [
            {id: 0, nom: "Rouveyrol", prenom: "Alexandre", surnom:"Elmer",
                image:"/public/images/elmer.png",
                son:"/public/son/elmer.wav",
                description:"Un éléphant tout bariolé de la tête au pied !",
                imageG:"/public/images/elmer.jpg"},
            {id:1, nom: "Janot", prenom: "Alexandre", surnom:"René",
                image:"http://www.hostingpics.net/thumbs/56/82/58/mini_568258Jano.png",
                son:"http://s1download-universal-soundbank.com/mp3/sounds/18531.mp3",
                description:"René la taupe, qui creuse dans le sol",
                imageG:"https://img11.hostingpics.net/pics/907338jannot.jpg"},
            {id:2, nom: "Lamblin", prenom: "Théo", surnom:"Yoshi",
                image:"http://www.hostingpics.net/thumbs/91/11/93/mini_911193yoshi.png",
                son:"http://s1download-universal-soundbank.com/mp3/sounds/18531.mp3",
                description:"Qui a du caca caki collé au cul-cul ?",
                imageG:"http://www.hostingpics.net/thumbs/77/47/21/mini_774721yoshi.jpg"},
            {id:3, nom: "Levy", prenom: "Simon", surnom:"Wilson",
                image:"http://www.hostingpics.net/thumbs/72/50/96/mini_725096wiwi.png",
                son:"http://s1download-universal-soundbank.com/mp3/sounds/18531.mp3",
                description:"Le charme de Wilson c'est de la poudre aux yeux",
                imageG:"http://s1.e-monsite.com/2009/03/07/10/36152069215px-mariomp8a-png.png"}
            ];
        return(
            <div className="container">
                <Header />
                <Modale rugbeux={rugbeux} modaleId={this.props.store.getState()}/>
                <Rugbeux rugbeux={rugbeux} f={(id) => this.modifModal(id)} />
            </div>
        )
    }
}

export default App
