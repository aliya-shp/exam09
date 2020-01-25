import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: {
                name: '',
                email: '',
                phone: '',
                photo: ''
            }
        }
    }

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    formSubmitHandler = e => {
        e.preventDefault();
        this.props.onSubmit({...this.state});
    };

    render() {
        return (
            <div className="container">
                <Form onSubmit={(e)=>this.formSubmitHandler}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" onChange={this.inputChangeHandler} value={this.state.contact.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" id="phone" onChange={this.inputChangeHandler} value={this.state.contact.phone} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" onChange={this.inputChangeHandler} value={this.state.contact.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="photo">Photo</Label>
                        <Input type="photo" name="photo" id="photo" onChange={this.inputChangeHandler} value={this.state.contact.photo} />
                    </FormGroup>
                    <Button type="submit">Save</Button>
                    <Button type="button">Back to Contacts</Button>
                </Form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
