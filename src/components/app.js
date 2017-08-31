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
                son:"/public/son/janot.wav",
                description:"René la taupe, qui creuse dans le sol",
                imageG:"/public/images/jannot.jpg"},
            {id:2, nom: "Lamblin", prenom: "Théo", surnom:"Yoshi",
                image:"/public/images/yoshi.png",
                son:"/public/son/yoshi.wav",
                description:"Qui a du caca caki collé au cul-cul ?",
                imageG:"/public/images/yoshi.jpg"},
            {id:3, nom: "Levy", prenom: "Simon", surnom:"Wilson",
                image:"/public/images/wilson.png",
                son:"/public/son/wilson.wav",
                description:"Le charme de Wilson c'est de la poudre aux yeux",
                imageG:"/public/images/wilson.jpg"},
            /*{id:4, nom: "Buffet", prenom: "Auriane", surnom:"Rototo",
                image:"/public/images/rototo.png",
                son:"/public/son/rototo.wav",
                description:"ROTOTOOOOOOOOOOOOOOOO !",
                imageG:"/public/images/rototo.jpg"},*/
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
            {id:8, nom: "Clédon", prenom: "Charlie", surnom:"Tipi",
                image:"/public/images/tipi.png",
                son:"/public/son/tipi.wav",
                description:"Un léger problème avec les flics, controleurs ou agents de sécurité..",
                imageG:"/public/images/tipi.jpg"},
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
            {id:12, nom: "Metge", prenom: "Robin", surnom:"Moignon",
                image:"/public/images/moignon.png",
                son:"/public/son/moignon.wav",
                description:"La moigne !",
                imageG:"/public/images/moignon.jpg"},
            {id:13, nom: "Danglade", prenom: "BenoIt", surnom:"Tritus",
                image:"/public/images/tritus.png",
                son:"/public/son/tritus.wav",
                description:"Ne cliquez pas trop sur les roux ça porte malheur",
                imageG:"/public/images/tritus.jpg"},
            {id:14, nom: "Menard", prenom: "Adrien", surnom:"Chataigne",
                image:"/public/images/chataigne.png",
                son:"/public/son/chataigne.wav",
                description:"Vol petit ballon du TOSS !",
                imageG:"/public/images/chataigne.jpg"},
            {id:15, nom: "Guillormini", prenom: "Thomas", surnom:"Cheval",
                image:"/public/images/cheval.png",
                son:"/public/son/cheval.wav",
                description:"Youpiyaya Youpiyoupiya !",
                imageG:"/public/images/cheval.jpg"},
            {id:16, nom: "Naze", prenom: "Spordi", surnom:"Brique + Junior",
                image:"/public/images/briquejunior.png",
                son:"/public/son/briquejunior.wav",
                description:"Inséparables !",
                imageG:"/public/images/briquejunior.png"},
            {id:17, nom: "Avidor", prenom: "Telem", surnom:"Tigrou",
                image:"/public/images/tigrou.png",
                son:"/public/son/tigrou.wav",
                description:"EMMMMEEEEENNNEZZZZ MOIIII !",
                imageG:"/public/images/tigrou.png"},
            {id:18, nom: "Iss", prenom: "Valérian", surnom:"Vaurien",
                image:"/public/images/vaurien.png",
                son:"/public/son/vaurien.wav",
                description:"Ecoeuré !",
                imageG:"/public/images/vaurien.png"},
            {id:20, nom: "Antonsanti", prenom: "Pierre-Louis", surnom:"Zobzob",
                image:"/public/images/zobzob.png",
                son:"/public/son/zobzob.wav",
                description:"I'm the batman",
                imageG:"/public/images/zobzob.jpg"},
            {id:21, nom: "Eichenne", prenom: "Alexandre", surnom:"Concon",
                image:"/public/images/concon.png",
                son:"/public/son/concon.wav",
                description:"Et surtout...",
                imageG:"/public/images/concon.jpg"},
            {id:22, nom: "de Jeu", prenom: "Faute", surnom:"FauteDeJeu",
                image:"/public/images/fdj.png",
                son:"/public/son/fdj.wav",
                description:"https://docs.google.com/spreadsheets/d/1-HbAjNBep07aas-NH7FdsuaTgKqkXDFzr-A7FMz8jkI/edit",
                imageG:"/public/images/fdj.jpg"},
            {id:23, nom: "Seban", prenom: "Thomas", surnom:"MST",
                image:"/public/images/mst.png",
                son:"/public/son/mst.wav",
                description:"Sacré facteur !",
                imageG:"/public/images/mst.jpg"},
            {id:24, nom: "Sonalier", prenom: "Nathan", surnom:"Seum",
                image:"/public/images/seum.png",
                son:"/public/son/seum.wav",
                description:"Sacré Magic Nathan !",
                imageG:"/public/images/seum.jpg"},
            {id:25, nom: "Ludovic", prenom: "Geoffroy", surnom:"Fanfan",
                image:"/public/images/fanfan.png",
                son:"/public/son/fanfan.wav",
                description:"Oui c'est moi Fanfan !",
                imageG:"/public/images/fanfan.jpg"},
            {id:26, nom: "Lacoma", prenom: "Vincent", surnom:"Pleurotte",
                image:"/public/images/pleurotte.png",
                son:"/public/son/pleurotte.wav",
                description:"Le requin bite !!",
                imageG:"/public/images/pleurotte.jpg"},
            {id:27, nom: "Legendre", prenom: "Vincent", surnom:"Mycose",
                image:"/public/images/mycose.png",
                son:"/public/son/mycose.wav",
                description:"Pas de commentaire sur l'audio..",
                imageG:"/public/images/mycose.jpg"},/*
             {id:14, nom: "Devidas", prenom: "Elsa", surnom:"Elsa",
                image:"/public/images/elsa.png",
                son:"/public/son/elsa.wav",
                description:"Tu peux te casser le nez une fois mais pas deux..!",
                imageG:"/public/images/elsa.jpg"},
            {id:14, nom: "Perrissin", prenom: "Mathilde", surnom:"Hector",
                image:"/public/images/hector.png",
                son:"/public/son/hector.wav",
                description:"HECTOOOOOOOOOOOOOOOOOOOOR" !",
                imageG:"/public/images/hector.jpg"}, 
            */
            {id:50, nom: "de Centrale", prenom: "Le Duc", surnom:"Poitou",
                image:"/public/images/poitou.png",
                son:"/public/son/poitou.wav",
                description:"T'inquiètes frérot, on va continuer à niquer les lyonnais !",
                imageG:"/public/images/poitou.jpg"},
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
