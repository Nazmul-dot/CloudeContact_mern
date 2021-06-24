import React, { useState } from 'react'
import {useSelector} from 'react-redux'
const Home = () => {
    const state = useSelector(state => state.contactData)
    console.log(state.loading)
    const [count,setcount]=useState(0)
    return (
        <div>
           <h1 className="text-center">welcome in this side.............</h1>
        </div>
    )
}

export default Home
