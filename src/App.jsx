import React from 'react'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Header from './Components/Header'
import './Styles/App.scss'
import Home from './Components/Home'
import Contact from './Components/Contact';
import Service from './Components/Service'
import Footer from './Components/Footer'

import './Styles/mediaqurey.scss'

const App = () => {
  return (
    <div>
<Router>
  <Header/>
  <Routes>
<Route path='/'  element={<Home/>}/>
<Route path='/contact'  element={<Contact/>}/>
<Route path='/service'  element={<Service/>}/>
<Route path='*'  element={<Home/>}/>



  </Routes>
  <Footer/>

</Router>

    </div>
  )
}

export default App