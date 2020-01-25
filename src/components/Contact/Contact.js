import React from 'react';

const Contact = props => {
    return (
        <div className="row"
             style={{margin: '5px', padding: '10px', border: '1px solid #dddddd'}}>
            <div className="photo-wrapper" style={{padding: '15px'}}>
                <div className="media-left">
                    <img className="user-photo"
                         src={this.props.contacts.contact.photo}
                         alt={this.props.contacts.contact.name} />
                </div>
                <div className="text-wrapper" style={{margin: '20px', fontSize: '16px'}}>
                    <span>{this.props.contacts.contact.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
