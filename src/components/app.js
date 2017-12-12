import React from 'react';
import ContactList from './contact-list';

export default () => {
    return (
        <div className="container">
            <h1 className="text-center my-3 bg-primary">Address Book</h1>
            <ContactList />
        </div>
    )
}
