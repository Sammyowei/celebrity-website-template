import React from 'react'
import './404.css'
import NavBar from '../../components/Navbar/NavBar.tsx';




function PageNotFound () {

return  (


    <div className="body">
     
  <h1>404</h1>
  <p>Oops! Cannot find the page you're looking for.</p>
  <button onClick={

    ()=> {

        console.log('Hello world!!')
    }
  }>Go Home</button>
</div>

);
}


export default PageNotFound;