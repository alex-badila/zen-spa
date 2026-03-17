import React, {Component} from 'react';
import Card from '../components/Card';
import essentialOilKit from '../assets/essential oil kit.jpg';
import faceCream from '../assets/face cream.jpg';
import massageOil from '../assets/massage oil.jpg';
import handCream from '../assets/hand cream.jpg';

class Products extends Component {

    // The state that represents all the products, the subtotal price, and the total price
    state = {
        products: [
            {
                name: "Essential Oil Kit",
                // Essential oil kit image source: https://unsplash.com/photos/62oEg-UL4Sg
                image: essentialOilKit,
                price: 20
            },
            {
                name: "Face Cream",
                // Face cream image source: https://unsplash.com/photos/7-EiWJ_0pv0
                image: faceCream,
                price: 15
            },
            {
                name: "Massage Oil",
                // Massage Oil image source: https://unsplash.com/photos/cU53ZFBr3lk
                image: massageOil,
                price: 18
            },
            {
                name: "Hand Cream",
                // Hand cream image source: https://unsplash.com/photos/y_CSTKJ0bEs
                image: handCream,
                price: 10
            }
        ],
        subtotal: 0,
        total_dollars: 0,
        total_cents: 0
    }
    
    // Adds the price of the essential oil kit to the subtotal, and then calculates the total
    incrementTotalsForEssentialOilKit = () => {
        // Use object destructuring of the state object to extract the subtotal
        const {subtotal} = this.state;

        // Pass the value of the subtotal into a local variable
        const subtotalLocal = subtotal + this.state.products[0].price;

        // Calculate the subtotal with tax and the dollar amount for the total
        const subtotalWithTax = subtotalLocal * 1.13;
        const totalDollarsLocal = Math.floor(subtotalWithTax);

        // Using the local variable for subtotal eliminates confusion which leads to error
        this.setState({
            subtotal: subtotalLocal,
            total_dollars: totalDollarsLocal,
            // Find the remaining cents for the total
            total_cents: Math.round((subtotalWithTax - totalDollarsLocal) * 100)
            // The total dollars and remaining cents can then be displayed at the bottom of the page
            // This is done so there can be trailing zeros
        });
    }

    // Adds the price of the face cream to the subtotal, and then calculates the total
    incrementTotalsForFaceCream = () => {
        // Use object destructuring of the state object to extract the subtotal
        const {subtotal} = this.state;

        // Pass the value of the subtotal into a local variable
        const subtotalLocal = subtotal + this.state.products[1].price;

        // Calculate the subtotal with tax and the dollar amount for the total
        const subtotalWithTax = subtotalLocal * 1.13;
        const totalDollarsLocal = Math.floor(subtotalWithTax);

        // Using the local variable for subtotal eliminates confusion which leads to error
        this.setState({
            subtotal: subtotalLocal,
            total_dollars: totalDollarsLocal,
            // Find the remaining cents for the total
            total_cents: Math.round((subtotalWithTax - totalDollarsLocal) * 100)
            // The total dollars and remaining cents can then be displayed at the bottom of the page
            // This is done so there can be trailing zeros
        });
    }

    // Adds the price of the massage oil to the subtotal, and then calculates the total
    incrementTotalsForMassageOil = () => {
        // Use object destructuring of the state object to extract the subtotal
        const {subtotal} = this.state;

        // Pass the value of the subtotal into a local variable
        const subtotalLocal = subtotal + this.state.products[2].price;

        // Calculate the subtotal with tax and the dollar amount for the total
        const subtotalWithTax = subtotalLocal * 1.13;
        const totalDollarsLocal = Math.floor(subtotalWithTax);

        // Using the local variable for subtotal eliminates confusion which leads to error
        this.setState({
            subtotal: subtotalLocal,
            total_dollars: totalDollarsLocal,
            // Find the remaining cents for the total
            total_cents: Math.round((subtotalWithTax - totalDollarsLocal) * 100)
            // The total dollars and remaining cents can then be displayed at the bottom of the page
            // This is done so there can be trailing zeros
        });
    }

    // Adds the price of the hand cream to the subtotal, and then calculates the total
    incrementTotalsForHandCream = () => {
        // Use object destructuring of the state object to extract the subtotal
        const {subtotal} = this.state;

        // Pass the value of the subtotal into a local variable
        const subtotalLocal = subtotal + this.state.products[3].price;

        // Calculate the subtotal with tax and the dollar amount for the total
        const subtotalWithTax = subtotalLocal * 1.13;
        const totalDollarsLocal = Math.floor(subtotalWithTax);

        // Using the local variable for subtotal eliminates confusion which leads to error
        this.setState({
            subtotal: subtotalLocal,
            total_dollars: totalDollarsLocal,
            // Find the remaining cents for the total
            total_cents: Math.round((subtotalWithTax - totalDollarsLocal) * 100)
            // The total dollars and remaining cents can then be displayed at the bottom of the page
            // This is done so there can be trailing zeros
        });
    }
    
    render() {
        // Used for cleaner code in the return statement
        const productsObject = this.state.products;

        return(
            <div>
                {/* Introductory statement for the products */}
                <p className="lead">Select one of our great products.</p>
                {/* Instructions on how to purchase the products */}
                <p className="lead">Click on one of the products to add it to your cart.</p>
                <p className="lead">The subtotal and total, which includes tax, will update accordingly.</p>
                {/* Put each product in its own column */}
                <div className="row">
                    <div className="col">
                        {/* Essential oil kit card */}
                        {/* If clicked, adds the price of the essential oil kit to the subtotal, and then calculates the total */}
                        <Card id="essential-oil-kit-card" color="green" onClick={this.incrementTotalsForEssentialOilKit}>
                            {/* Display the image of the card passed from the products object */}
                            <img src={productsObject[0].image} width="200" length="200" alt="essential oil kit" />
                            {/* Display the message of the card made up of the name and price attributes passed from the products object */}
                            <p>{productsObject[0].name}: ${productsObject[0].price}</p>
                        </Card>
                    </div>
                    <div className="col">
                        {/* Face cream card */}
                        {/* If clicked, adds the price of the face cream to the subtotal, and then calculates the total */}
                        <Card id="face-cream-card" color="lavender"  onClick={this.incrementTotalsForFaceCream}>
                            {/* Display the image of the card passed from the products object */}
                            <img src={productsObject[1].image} width="200" length="200" alt="face cream" />
                            {/* Display the message of the card made up of the name and price attributes passed from the products object */}
                            <p>{productsObject[1].name}: ${productsObject[1].price}</p>
                        </Card>
                    </div>
                    <div className="col">
                        {/* Massage oil card */}
                        {/* If clicked, adds the price of the massage oil to the subtotal, and then calculates the total */}
                        <Card id="massage-oil-card" color="red" onClick={this.incrementTotalsForMassageOil}>
                            {/* Display the image of the card passed from the products object */}
                            <img src={productsObject[2].image} width="200" length="200" alt="massage oil" />
                            {/* Display the message of the card made up of the name and price attributes passed from the products object */}
                            <p>{productsObject[2].name}: ${productsObject[2].price}</p>
                        </Card>
                    </div>
                    <div className="col">
                        {/* Hand cream card */}
                        {/* If clicked, adds the price of the hand cream to the subtotal, and then calculates the total */}
                        <Card id="hand-cream-card" color="yellow" onClick={this.incrementTotalsForHandCream}>
                            {/* Display the image of the card passed from the products object */}
                            <img src={productsObject[3].image} width="200" length="200" alt="hand cream" />
                            {/* Display the message of the card made up of the name and price attributes passed from the products object */}
                            <p>{productsObject[3].name}: ${productsObject[3].price}</p>
                        </Card>
                    </div>
                </div>
                <br/>
                <p>Subtotal: ${this.state.subtotal}</p>
                <br/>
                <p>Total: ${this.state.total_dollars}.{this.state.total_cents}</p>
            </div>  
        );
    }   
}

export default Products;