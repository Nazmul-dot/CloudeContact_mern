import {
    GET_CONTACT, ADD_CONTACT, UPDATE_CONTACT,
    DELETE_CONTACT, SELECTED_CONTACT,
    CONTACT_ERROR, CLEAR_SELECTED, FILTER_CONTACT
} from './ContactType'
import axios from 'axios'

//getall data
export const getcontact = () => {
    // alert("getdata")
    return async dispatch => {
        try {
            const result = await axios.get('/getall')
            console.log(result)
            dispatch({
                type: GET_CONTACT,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: CONTACT_ERROR,
                payload: error.message
            })
        }

    }
}

//add data
export const addcontact = (addData) => {
    // alert("adddata")
    console.log(addData)
    return async dispatch => {
        try {
            const result = await axios.post('/addData', addData)
            console.log(result)
            dispatch({
                type: ADD_CONTACT,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: CONTACT_ERROR,
                payload: error.message
            })
        }

    }
}

//update data
export const updatecontact = (contact) => {
    // alert("updatedata")
    return async dispatch => {
        try {
            const result = await axios.patch(`/upData/${contact._id}`, contact)
            console.log(result)
            console.log(contact)
            dispatch({
                type: UPDATE_CONTACT,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: CONTACT_ERROR,
                payload: error.message
            })
        }

    }
}

//delet

export const deletcontact = (id) => {
    // alert("deletedata")
    return async dispatch => {
        try {
            const result = await axios.delete(`/delData/${id}`)
            console.log(result)
            dispatch({
                type: DELETE_CONTACT,
                payload: id
            })
        } catch (error) {
            dispatch({
                type: CONTACT_ERROR,
                payload: error.message
            })
        }

    }
}


export const filterContacts = text => {
    //console.log(text)
    return { type: FILTER_CONTACT, payload: text };
};

export const setSelected = contact => {
    return { type: SELECTED_CONTACT, payload: contact };
};

export const clearSelected = () => {
    // alert('clearSelected')
    return { type: CLEAR_SELECTED };
};