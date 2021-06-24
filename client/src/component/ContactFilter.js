import React from 'react'
import { filterContacts } from '../redux/contact/contactAction'
import { useDispatch, useSelector } from 'react-redux'
const ContactFilter = () => {
  const state = useSelector(state => state.contactData)
  console.log(state.filtered)
  const dispatch = useDispatch()

  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.value)
    dispatch(filterContacts(e.target.value))
  };
  
  return (
    <>
      <input
        type="search"
        onChange={handleChange}
        class="form-control mb-2" placeholder="Filters Contacts...." aria-label="Last name"
      />

    </>
  )
}

export default ContactFilter
