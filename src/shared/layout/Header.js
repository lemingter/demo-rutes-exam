import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return ( 
        <div className="App-lateral">
            <img 
                src="https://w1.pngwing.com/pngs/340/835/png-transparent-chicken-knife-chicken-as-food-tshirt-kitchen-knives-chicken-sandwich-sticker-crew-neck-thumbnail.png" 
                alt="Lel"
            />
            <h1>Luis Elias</h1>
            <div className="Links">
                <Link to="/curriculum">Curriculum Vitae</Link><br/>
                <Link to="/portafolio">Portafolio</Link><br/>
                <Link to="/contact">Contacto</Link><br/>
            </div>
        </div>
    );
    
}

export default Header;