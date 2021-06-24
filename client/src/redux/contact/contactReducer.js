import {
    GET_CONTACT, ADD_CONTACT, UPDATE_CONTACT,
    DELETE_CONTACT, SELECTED_CONTACT,
    CONTACT_ERROR, CLEAR_SELECTED, FILTER_CONTACT
} from './ContactType'

const initialcontact = {
    contacts: [],
    loading: true,
    selected: {},
    error: null,
    filtered: null
}

const contactReducer = (state = initialcontact, action) => {

    switch (action.type) {
        case GET_CONTACT:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                loading: false
            }

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => {
                    return (
                        contact._id !== action.payload
                    )
                }),
                loading: false
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    return (
                        contact._id === action.payload._id ? action.payload : contact
                    )
                }),


                loading: false
            }
        case FILTER_CONTACT:
            console.log(action.payload)
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, "gi");
                    return contact.name.match(regex) || contact.email.match(regex) || contact.phone.match(regex);
                })
            };
        case SELECTED_CONTACT:
            return { ...state, selected: action.payload };
        case CLEAR_SELECTED:
            // alert(action.type)
            return { ...state, selected: {} };
        case CONTACT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default contactReducer