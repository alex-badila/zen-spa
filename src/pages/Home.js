import React from 'react';
import spa from '../assets/spa.jpg';
import Button from '../components/Button';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            {/* Spa image source: https://unsplash.com/photos/ZbzYDboN7fg */}
            <img src={spa} width="500" height="500" alt="hot stones" />
            <br/>
            <br/>
            {/* Introductory message for the home page */}
            <p className="lead">Welcome to Zen Spa! Your one-stop shop for massages, pedicures, and manicures! We also sell essential oil kits, face creams, massage oil, and hand creams!</p>
            <br/>
            {/* Green button linking to the Packages page */}
            {/* The style component was modified so that the Button does not have an underline from the link component */}
            <Link to="/packages" style={{textDecoration: 'none'}}>
                <Button id="massage-button" color="green">Book A Service Today!</Button>
            </Link>
            <br/>
            {/* Salmon button linking to the Products page */}
            {/* The style component was modified so that the Button does not have an underline from the link component */}
            <Link to="/products" style={{textDecoration: 'none'}}>
                <Button id="products-button" color="salmon">Buy Our Products!</Button>
            </Link>
            <br/>
        </div>
    );
}

export default Home;