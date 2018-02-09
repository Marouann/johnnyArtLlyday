import React from 'react';
import Header from './header.js';
import Rugbeux from './rugbeux.js';
import Modale from './modale.js';
import Bdx from './bdx.js';
import Tomb from './tomb.js';
import Fire from './fire.js';

class App extends React.Component {

    render() {
        const rugbeux = [
                {
                    id: 0, nom: "Rouveyrol", prenom: "Alexandre", surnom:"Elmer",
                    image:"/public/images/johnny1.png",
                    son:"/public/son/johnny1.wav",
                    description:"Un éléphant tout bariolé de la tête au pied !",
                    imageG:"/public/images/johnny1.png"
                },
                {
                    id:1, nom: "Janot", prenom: "Alexandre", surnom:"René",
                    image:"/public/images/johnny2.png",
                    son:"/public/son/johnny2.wav",
                    description:"René la taupe, qui creuse dans le sol",
                    imageG:"/public/images/johnny2.png"
                },
                {
                    id:2, nom: "Lamblin", prenom: "Théo", surnom:"Yoshi",
                    image:"/public/images/johnny3.png",
                    son:"/public/son/johnny3.wav",
                    description:"Qui a du caca caki collé au cul-cul ?",
                    imageG:"/public/images/johnny3.png"
                },
                {
                    id:3, nom: "Levy", prenom: "Simon", surnom:"Wilson",
                    image:"/public/images/johnny4.png",
                    son:"/public/son/boula.wav",
                    description:"Le charme de Wilson c'est de la poudre aux yeux",
                    imageG:"/public/images/johnny4.png"
                },
            ];
        
        const bda = [
            {
                src: "public/images/spqart.png",
                good: [50],
                bad: [0],
            },
            {
                src: "public/images/moriarty.png",
                good: [0],
                bad: [0],
            },
            {
                src: "public/images/teambarton.png",
                good: [0],
                bad: [0],
            },
            {
                src: "public/images/gartdiens.png",
                good: [0],
                bad: [0],
            },
        ];

        const bde = [
            {
                src: "public/images/belzebruth.jpg",
                good: [0],
                bad: [0],
            },
            {
                src: "public/images/airfoxone.png",
                good: [0],
                bad: [0],
            },
        ];

        const bds = [
            {
                src: "public/images/asporcalypse.png",
                good: [5],
                bad: [0],
            },
            {
                src: "public/images/jacksporrow.png",
                good: [0],
                bad: [0],
            },
            {
                src: "public/images/perecaspor.png",
                good: [10],
                bad: [50],
            },
            {
                src: "public/images/sportroopers.svg",
                good: [10],
                bad: [0],
            },
        ];

        return (
            <div className="container">
                <Header />
                <Rugbeux rugbeux={rugbeux} />
                <div className="bandeblanche" />
                <h1>Classement des plus formidables</h1>
                <p>Si vous régalez, vous gagnez des points <Fire /> !</p>
                <p>Si vous chiez, vous enterrez un peu plus Johnny... <Tomb /></p>
                <Bdx name="BDA" bdx={bda} />
                <Bdx name="BDE" bdx={bde} />
                <Bdx name="BDS" bdx={bds} />
                <div className="points">
                    <div className="bandeblanche" />
                    <h1>Derniers points marqués</h1>
                    <div>
                        <p>5 <Fire /> pour les Aspos et la crève qu'ils ont dû choper dans les douves</p>
                        <p>10 <Fire /> pour le film des Troopers et leur petite balade</p>
                        <p>50 <Tomb /> pour le film malaisant des Caspors mais 10 <Fire /> pour l'originalité !!</p>
                        <p>50 <Fire /> pour le discours de Jésus SPQArt !</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
