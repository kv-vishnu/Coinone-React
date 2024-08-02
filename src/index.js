import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Erp from './Erp';
import Works from './Works';
import Services from './Services';
import Contact from './Contact';
import Web from './Web';
import Mobile from './Mobile';
import Crm from './Crm';
import Restuarant from './Restuarant';
import Temple from './Temple';
import Boutique from './Boutique';
import Retail from './Retail';
import Billing from './Billing';
import About from './About';
import Dashboard from './Dashboard';
import Admin from './Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='/coinone'>
      <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/erp' element={<Erp/>}/>
      <Route path='/works' element={<Works/>}/>
      <Route path='/services/:id' element={<Services/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/web' element={<Web/>}/>
       <Route path='/mobile' element={<Mobile/>}/>
       <Route path='/crm' element={<Crm/>}/>
       <Route path='/restuarant' element={<Restuarant/>}/>
       <Route path='/temple' element={<Temple/>}/>
       <Route path='/boutique' element={<Boutique/>}/>
       <Route path='/retail' element={<Retail/>}/>
       <Route path='/billing' element={<Billing/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
   {/* <App /> */}
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
