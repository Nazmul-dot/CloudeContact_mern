import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../component/Home'
import ContactPage from './ContactPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import axios from 'axios'
import Logout from './Logout';
import { useSelector } from 'react-redux'
axios.defaults.withCredentials = true;
const Navbar = () => {
    const { isAuthantication } = useSelector(state => state.userData)
    return (

        <Router>
            <div className="container-fluid " style={{backgroundColor:"#e3f2fd"}}>
                <div className="row">
                    <div className="col-10 mx-auto">


                        <nav class="navbar navbar-expand-lg navbar navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                            <a class="navbar-brand" href="#">Nazmul</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav " style={{ marginLeft: 'auto' }}>
                                    {
                                        isAuthantication && <>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="home">Home</Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link class="nav-link" to="contact">Contact</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="logout">Logout</Link>
                                            </li>
                                        </>
                                    }

                                    {
                                        !isAuthantication && <>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="signin">Sign In</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="signup">Sign Up</Link>
                                            </li>
                                        </>
                                    }



                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <Switch>
                {
                    isAuthantication && <>
                        <Route exact path='/home'>
                            <Home />
                        </Route>
                        <Route path='/logout'>
                            <Logout />
                        </Route>
                        <Route path='/contact'>
                            <ContactPage />
                        </Route>
                    </>
                }
                {
                    !isAuthantication && <>
                        <Route exact path='/signin'>
                            <SignIn />
                        </Route>

                        <Route path='/signup'>
                            <SignUp />
                        </Route>
                    </>
                }




            </Switch>

        </Router>
    )
}

export default Navbar
