import React, {Component} from 'react';
import axiosContacts from "../../axiosContacts";
import ContactForm from "../../components/ContactForm/ContactForm";

class EditContact extends Component {
    state = {
        contact: null,
    };

    getContactId = () => {
        const id = this.props.match.params.id;
        return `/contacts/${id}.json`;
    };

    async componentDidMount() {
        const response = await axiosContacts.get(this.getContactId());

        this.setState({contact: response.data});
    }

    submitFormHandler = async (contact) => {
        await axiosContacts.put(this.getContactId(), contact);
        this.props.history.push('/');
    };

    render() {
        return this.state.contact && (
            <ContactForm
                onSubmit={this.submitFormHandler}
                contact={this.state.contact}
            />
        )
    }
}

export default EditContact;