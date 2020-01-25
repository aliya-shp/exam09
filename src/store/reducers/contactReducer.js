import {ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT} from "../actions/actionTypes";

const initialState = {
    contacts: {
        contact: INITIAL_CONTACT,
    },
    loading: false,
    error: null,
};

const INITIAL_CONTACT = {
    name: null,
    phone: null,
    email: null,
    photo: null,
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: {
                    contact: action.contact
                }
            };
        case DELETE_CONTACT:
            if (state.contacts[action.contact] === null) {
                return state;
            }

            return {
                ...state,
                contacts: {
                    contact: INITIAL_CONTACT,
                }
            };
        case EDIT_CONTACT:
            if (state.contacts.contact[action.contact] !== state.contacts.contact[action.contact]) {
                return state;
            }

            return {
                ...state,
                contacts: {
                    contact: action.contact
                }
            };
        default:
            return state;
    }
};

export default contactReducer;