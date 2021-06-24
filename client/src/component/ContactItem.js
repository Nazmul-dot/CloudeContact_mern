import React from 'react'

const ContactItem = ({contact,ondelete,onedit}) => {
    const personal={right:'10px',top:'15px',background:'	#dc143c',padding:"3px",borderRadius:'5px'}
    const professional={right:'10px',top:'15px',background:'#008080',padding:"3px",borderRadius:'5px'}
    const { _id, name, email, phone, type } = contact;
    //console.log(name,email,phone)
    return (
        <>
            <div class="card w-90  m-2 position-relative">
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text"><i className="zmdi zmdi-email align-self-center "/> {email}</p>
                    <p class="card-text"><i class="zmdi zmdi-phone"></i> {phone}</p>
                    <p className="position-absolute" style={contact.type==='personal'?personal:professional}>{type}</p>
                    
                    <button href="#" class="btn btn-danger mr-1" onClick={()=>ondelete(_id)}>Delete</button> 
                    <button href="#" class="btn btn-secondary" onClick={()=>onedit(contact)}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default ContactItem
