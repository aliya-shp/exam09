import axiosContacts from "../../axiosContacts";
import {CONTACTS_FAILURE, CONTACTS_REQUEST, CONTACTS_SUCCESS} from "./actionTypes";

const fetchContactsRequest = () => ({type: CONTACTS_REQUEST});
const fetchContactsSuccess = () => ({type: CONTACTS_SUCCESS});
const fetchContactsFailure = error => ({type: CONTACTS_FAILURE});

export const getContacts = contacts => {
    return async dispatch => {
        dispatch(fetchContactsRequest());
        try {
            const response = axiosContacts.get('/contacts.json');
            const contacts = response.data;
            dispatch(fetchContactsSuccess(contacts));
        } catch (e) {
            dispatch(fetchContactsFailure());
        }
    }
};

export const fetchContactsSuccess = contacts => ({type: CONTACTS_SUCCESS, contacts});
