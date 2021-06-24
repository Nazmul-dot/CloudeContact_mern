import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import ContactItem from './ContactItem';
import {setSelected,deletcontact} from '../redux/contact/contactAction'
const Contacts = () => {
    const dispatch=useDispatch();
    const state = useSelector(state => state.contactData)
    console.log(state.contacts)
    console.log(state.filtered)

    
    const ondelete=(id)=>{
        dispatch(deletcontact(id))
       //alert('delet')
    }
    const onedit=(contact)=>{
        dispatch(setSelected(contact))
       // alert('update')
    }
    return(
        <>
          {
              state.filtered?
              (
                  state.filtered.map((contact,i)=>{
                      return(
                          <ContactItem
                          key={i}
                          contact={contact}
                          ondelete={ondelete}
                          onedit={onedit}
                          />
                      )
                  })
              ):(
                state.contacts.map((contact,i)=>{
                    return(
                        <ContactItem
                        key={i}
                        contact={contact}
                        ondelete={ondelete}
                        onedit={onedit}
                        />
                    )
                })
              )
          }
        </>
    )
}

export default Contacts
