import React, { useState } from 'react';
import ImgReact from '../assets/react.svg';

const Home = () => {
    const [afficherImage, setAfficherImage] = useState(true);

    const basculerImage = () => {
        setAfficherImage(!afficherImage);
    };

    return (
        <div className='Home'>
            <h1>Accueil</h1>
            <h3>Ceci est une simple page d'accueil</h3>
            <button 
            className=
            {`${afficherImage ? 'NbtnHome' : 'btnHome'}`} 
            onClick=
            {basculerImage}>
            {afficherImage ? 'Masquer image' : 'Afficher image'}
            </button>
            {afficherImage && (
            <div className='spin'>
                <img src={ImgReact} className='imgHome'/>
            </div>)}
        </div>
    );
};

export default Home;
