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
                son:"/public/son/yoshi.wav",
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
                imageG:"/public/images/tipi.jpg"},
            {id:5, nom: "Six", prenom: "Marin", surnom:"Bamboula",
                image:"/public/images/boula.png",
                son:"/public/son/boula.wav",
                description:"Ce diable de Boula !",
                imageG:"/public/images/boula.jpg"},
            {id:6, nom: "Bencheikh", prenom: "Benjamin", surnom:"Malouda",
                image:"/public/images/malouda.png",
                son:"/public/son/boula.wav",
                description:"Pour refaire votre intérieur n'hésitez pas, contacter Maloudamidot !",
                imageG:"/public/images/malouda.jpg"},
            {id:7, nom: "Degrotte", prenom: "Vivien", surnom:"Pumba",
                image:"/public/images/pumba.png",
                son:"/public/son/pumba.wav",
                description:"C'est PUMMMMMBAAAAA !",
                imageG:"/public/images/pumba.jpg"},
            {id:8, nom: "Buffet", prenom: "Auriane", surnom:"Rototo",
                image:"/public/images/rototo.png",
                son:"/public/son/rototo.wav",
                description:"ROTOTOOOOOOOOOOOOOOOO !",
                imageG:"/public/images/rototo.jpg"},
            {id:9, nom: "Sapiens", prenom: "Hétéros", surnom:"Sporsaires",
                image:"/public/images/sapiens.png",
                son:"/public/son/sapiens.wav",
                description:"GAROOOOOSPOOOORSAIIIIIAIIIIIAIIIRE !",
                imageG:"/public/images/sapiens.jpg"},
            {id:10, nom: "Vaillant", prenom: "Paul", surnom:"Vaillant",
                image:"/public/images/vaillant.png",
                son:"/public/son/vaillant.wav",
                description:"",
                imageG:"/public/images/vaillant.jpg"},
            {id:11, nom: "Khalil", prenom: "Sami", surnom:"Scoubi",
                image:"/public/images/scoubi.png",
                son:"/public/son/scoubi.wav",
                description:"Futur parain de promo !",
                imageG:"/public/images/scoubi.jpg"},
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
