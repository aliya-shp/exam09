import {ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT} from "./actionTypes";

export const addContact = contactData => ({type: ADD_CONTACT, contactData});

export const deleteContact = contactData => ({type: DELETE_CONTACT, contactData});

export const editContact = contactData => ({type: EDIT_CONTACT, contactData});

