import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addcontact,updatecontact,clearSelected} from '../redux/contact/contactAction'
const initial={
    name:'',
    email:'',
    phone:'',
    type:"personal"
}
const ContactFrom = () => {
    const dispatch=useDispatch();
    const {selected} = useSelector(state => state.contactData)
    console.log(selected)
    const [contact,setcontact]=useState(initial)


    useEffect(()=>{
        if(selected._id)
        {
            console.log('select_data')
            setcontact(selected)
        }
        else{
            setcontact(initial)
        }
    },[selected])
    const { name, email, phone, type } =    contact;
    const handleinput=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setcontact({...contact,[name]:value})
    }
const handleSubmit=(event)=>{
    event.preventDefault();
    if(contact._id){
        dispatch(updatecontact(contact))
        dispatch(clearSelected())
    }else{
        dispatch(addcontact(contact))
        //console.log(contact)
    }
    setcontact(initial)

}

const clearselet=()=>{
    dispatch(clearSelected())
}
    return (
        <>
            <from class="row g-3" >
                <div class="col-11 m-1">
                <h4 style={{ textAlign: 'center' }} className='text-info'>{contact._id?'Update Contact':'Add Contact'}</h4>
                </div>
                <div class="col-11 m-1">
                    <input type="text" onChange={handleinput} value={name} name='name' class="form-control" placeholder="Name" aria-label="First name" />
                </div>
                <div class="col-11 m-1">
                    <input type="text" onChange={handleinput} value={email} name="email" class="form-control" placeholder="Email" aria-label="Last name" />
                </div>
                <div class="col-11 m-1">
                    <input type="number" onChange={handleinput} value={phone} name='phone' class="form-control" placeholder="Phone" aria-label="Last name" />
                </div>
                <div class="col-11 m-1">
                    <div className="d-flex flex-column">
                        <p className="mt-2 ">Contact Type</p> <br />

                        <div className=" d-flex" style={{ marginTop: '-15px' }}>
                            <div class="form-check ">
                                <input class="form-check-input" onChange={handleinput}  type="radio" name="type" value="personal" id="flexRadioDefault1" checked/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Personal
                                </label>
                            </div>
                            <div class="form-check ">
                                <input class="form-check-input" onChange={handleinput} type="radio" name="type"  value="professional" id="flexRadioDefault2"   />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Professional
                                </label>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-11 m-1 mt-4">
                    <input type="submit" value={contact._id ? "Update Contact" : "Add Contact"} onClick={handleSubmit} class="form-control bg-primary" placeholder="Last name" aria-label="Last name" />
                    {contact._id? <input type="button" onClick={clearselet} value="clear" class="form-control bg-dark text-white mt-3" placeholder="Last name" aria-label="Last name" />:''}
                   
                </div>
            </from>

        </>
    )
}

export default ContactFrom
