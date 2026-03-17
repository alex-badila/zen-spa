import React, {Component} from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

class Contact extends Component {

    // The state will hold all the values passed into the form
    state = {
        name: '',
        // Put a default service in case nothing is selected (Manicure is the first one in the dropdown)
        typeOfService: 'Manicure',
        phoneNumber: '',
        message: ''
    }

    // Updates the name field in the state when it's changed in the form field
    changeNameFieldInState = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    // Updates the typeOfService field in the state when it's changed in the form field
    changeTypeOfServiceFieldInState = (event) => {
        this.setState({
            typeOfService: event.target.value
        });
    }

    // Updates the phoneNumber field in the state when it's changed in the form field
    changePhoneNumberFieldInState = (event) => {
        this.setState({
            phoneNumber: event.target.value
        });
    }

    // Updates the message field in the state when it's changed in the form field
    changeMessageFieldInState = (event) => {
        this.setState({
            message: event.target.value
        });
    }

    // Submits the information and displays it to the console
    handleSubmitClick = () => {
        // Perform object destructuring on the state to obtain the different form field values
        const {name, typeOfService, phoneNumber, message} = this.state;

        console.log({
            name,
            typeOfService,
            phoneNumber,
            message
        });

        this.setState({
            name: '',
            typeOfService: 'Manicure',
            phoneNumber: '',
            message: ''
        });

    }

    render() {
        // Perform object destructuring on the state to obtain the different form field values
        const {name, typeOfService, phoneNumber, message} = this.state;

        return(
            <div>
                <Card id="contact-card" color="white">
                    {/* Introduction to the form */}
                    <p className="lead">Schedule your spa appointment today!</p>
                    {/* Takes in the name value as a string */}
                    <form className="contactForm">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" className="form-control" value={name} onChange={(event) => this.changeNameFieldInState(event)} />
                        </div>
                        <br/>
                        {/* Takes in the typeOfService value from a dropdown as a string */}
                        <div className="dropdown">
                            <label htmlFor="name">Type of Service:</label>
                            <br/>
                            <select id="name" value={typeOfService} onChange={(event) => this.changeTypeOfServiceFieldInState(event)}>
                                <option value="Manicure">Manicure</option>
                                <option value="Pedicure">Pedicure</option>
                                <option value="Massage">Massage</option>
                                <option value="Facial">Facial</option>
                            </select>
                        </div>
                        <br/>
                        {/* Takes in the phoneNumber value as a string */}
                        <div className="form-group">
                            <label htmlFor="phone-number">Phone Number:</label>
                            <input type="text" id="phone-number" className="form-control" value={phoneNumber} onChange={(event) => this.changePhoneNumberFieldInState(event)} />
                        </div>
                        <br/>
                        {/* Takes in the message value as a string */}
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" className="form-control" rows="5" value={message} onChange={(event) => this.changeMessageFieldInState(event)} >
                                
                            </textarea>
                        </div>
                        <br/>
                        <div className="form-group">
                            {/* Submits the information and displays it to the console */}
                            <Button id="submit-button" color="blue" onClick={this.handleSubmitClick}>Submit</Button>
                        </div>
                        <br/>
                    </form>
                </Card>
            </div>
        );
    }
    
}

export default Contact;