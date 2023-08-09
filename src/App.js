import React from 'react';
import { Brand, CTA,  Navbar } from './components';
import { Customers, Faq, Footer, Header} from './containers';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className='bg'>


        <Navbar/>
        
        <Header/>
      </div>  
      
      <Brand/>
      <CTA/>
      <Customers/>
      <Faq/>
      <Footer/>


    </div>
  )
  
}

export default App
