import React, {Component} from 'react';
import axiosContacts from "../../axiosContacts";
import ContactForm from "../../components/ContactForm/ContactForm";

class ContactForm extends Component {
    formSubmitHandler = async (contactData) => {
        await axiosContacts.post('/contacts.json', contactData);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add New Contact</h1>
                <ContactForm
                    onSubmit={this.formSubmitHandler}
                />

            </div>
        );
    }
}

export default ContactForm;