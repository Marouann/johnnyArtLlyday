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
                son:"/public/son/elmer.mp3",
                description:"Un éléphant tout bariolé de la tête au pied !",
                imageG:"/public/images/elmer.jpg"},
            {id:1, nom: "Janot", prenom: "Alexandre", surnom:"René",
                image:"/public/images/Jano.png",
                son:"http://s1download-universal-soundbank.com/mp3/sounds/18531.mp3",
                description:"René la taupe, qui creuse dans le sol",
                imageG:"/public/images/jannot.jpg"},
            {id:2, nom: "Lamblin", prenom: "Théo", surnom:"Yoshi",
                image:"/public/images/yoshi.png",
                son:"http://s1download-universal-soundbank.com/mp3/sounds/18531.mp3",
                description:"Qui a du caca caki collé au cul-cul ?",
                imageG:"/public/images/yoshi.jpg"},
            {id:3, nom: "Levy", prenom: "Simon", surnom:"Wilson",
                image:"/public/images/wiwi.png",
                son:"http://s1download-universal-soundbank.com/mp3/sounds/18531.mp3",
                description:"Le charme de Wilson c'est de la poudre aux yeux",
                imageG:"http://s1.e-monsite.com/2009/03/07/10/36152069215px-mariomp8a-png.png"},
            {id:4, nom: "Clédon", prenom: "Charlie", surnom:"Tipi",
                image:"/public/images/tipi.png",
                son:"/public/son/tipi.wav",
                description:"Un léger problème avec les flics, controleurs ou agents de sécurité..",
                imageG:"/public/images/tipi.jpg"}
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
