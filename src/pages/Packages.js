import React, {Component} from 'react';
import Card from '../components/Card';
import massage from '../assets/massage.jpg';
import pedicure from '../assets/pedicure.jpg';
import manicure from '../assets/manicure.jpg';

class Packages extends Component {

    // The state that represents all the packages and the total price
    state = {
        packages: [
            {
                name: "Massage",
                // Massage image source: https://unsplash.com/photos/a9pFSC8dTlo
                image: massage,
                price: 85
            },
            {
                name: "Pedicure",
                // Pedicure image source: https://unsplash.com/photos/qeuJczNo54w
                image: pedicure,
                price: 45
            },
            {
                name: "Manicure",
                // Manicure image source: https://unsplash.com/photos/tXwBDZS2JxQ
                image: manicure,
                price: 35
            }
        ],
        total: 0
    }
    
    // Adds the price of the massage to the total
    incrementTotalForMassage = () => {
        // Use object destructuring of the state object to extract the total
        const {total} = this.state;

        this.setState({
            total: total + this.state.packages[0].price
        });
    }

    // Adds the price of the pedicure to the total
    incrementTotalForPedicure = () => {
        // Use object destructuring of the state object to extract the total
        const {total} = this.state;

        this.setState({
            total: total + this.state.packages[1].price
        });
    }

    // Adds the price of the manicure to the total
    incrementTotalForManicure = () => {
        // Use object destructuring of the state object to extract the total
        const {total} = this.state;

        this.setState({
            total: total + this.state.packages[2].price
        });
    }
    
    render() {
        // Used for cleaner code in the return statement
        const packagesObject = this.state.packages;

        return(
            <div>
                {/* Introductory statement for the packages */}
                <p className="lead">Select one of our relaxing services. Taxes included.</p>
                {/* Instructions on how to purchase the packages */}
                <p className="lead">Click on one of the services to add it to your cart.</p>
                <p className="lead">The total will update accordingly.</p>
                {/* Put each package in its own column */}
                <div className="row">
                    <div className="col">
                        {/* Massage card */}
                        {/* If clicked, adds the price of the massage to the total */}
                        <Card id="massage-card" color="white" onClick={this.incrementTotalForMassage}>
                            {/* Display the image of the card passed from the packages object */}
                            <img src={packagesObject[0].image} width="200" length="200" alt="massage" />
                            {/* Display the message of the card made up of the name and price attributes passed from the packages object */}
                            <p>{packagesObject[0].name}: ${packagesObject[0].price}</p>
                        </Card>
                    </div>
                    <div className="col">
                        {/* Pedicure card */}
                        {/* If clicked, adds the price of the pedicure to the total */}
                        <Card id="pedicure-card" color="white" onClick={this.incrementTotalForPedicure}>
                            {/* Display the image of the card passed from the packages object */}
                            <img src={packagesObject[1].image} width="200" length="200" alt="pedicure" />
                            {/* Display the message of the card made up of the name and price attributes passed from the packages object */}
                            <p>{packagesObject[1].name}: ${packagesObject[1].price}</p>
                        </Card>
                    </div>
                    <div className="col">
                        {/* Manicure card */}
                        {/* If clicked, adds the price of the manicure to the total */}
                        <Card id="manicure-card" color="white" onClick={this.incrementTotalForManicure}>
                            {/* Display the image of the card passed from the packages object */}
                            <img src={packagesObject[2].image} width="200" length="200" alt="manicure" />
                            {/* Display the message of the card made up of the name and price attributes passed from the packages object */}
                            <p>{packagesObject[2].name}: ${packagesObject[2].price}</p>
                        </Card>
                    </div>
                </div>
                <br/>
                <p>Total: ${this.state.total}</p>
            </div>  
        );
    }   
}

export default Packages;