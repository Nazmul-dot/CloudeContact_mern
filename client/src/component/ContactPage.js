import React from 'react'
import ContactFilter from './ContactFilter'
import ContactFrom from './ContactFrom'
import Contacts from './Contacts'
import Home from './Home'
const ContactPage = () => {

    return (
        <>
        <Home/>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-9 mx-auto ">


                        <div className="row ">

                            <div className="col-md-5 m-1 mx-auto">
                                <>
                                
                                   <ContactFrom/>
                                </>
                            </div>


                            <div className="col-md-5 m-1 mx-auto">

                                <>
                                   <ContactFilter/>
                                </>

                                <>
                                    <Contacts/>
                                </>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage
