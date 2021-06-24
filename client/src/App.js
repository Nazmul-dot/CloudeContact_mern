import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import {Provider} from 'react-redux'
import store from './redux/store'
import {userlogedAction} from './redux/user/userAction'
import {getcontact} from './redux/contact/contactAction'

if(localStorage.jwtToken)
{
  store.dispatch(userlogedAction())
  store.dispatch(getcontact())
}

function App() {
  return (
    <Provider store={store}>
     <Navbar/>
    </Provider>
  );
}

export default App;
