import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
         {/* intro */}
         <div style={{width:'400px'}}>
          <h5> <i class="fa-solid fa-music me-2"></i>
          Meadia player</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
         </div>
         {/* link */}
         <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>Watch History Page</Link>
         </div>
         {/* guids */}
         <div className='d-flex flex-column'>
          <h5>Guids</h5>
          <a href="https://react.dev/"  style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
          <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/" style={{textDecoration:'none',color:'white'}} target='_blank'>React router</a>
         </div>
         {/* contact */}
         <div className='d-flex flex-column'>
          <h5>Contacts</h5>
           <div className='d-flex '>
            <input type="text" placeholder='Enter your email here' className='form-control me-2'/>
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right-long"></i></button>


          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a href="https://x.com/?lang=en"><i class="fa-brands fa-twitter" style={{textDecoration:'none',color:'white'}} target='_blank'></i></a>
            <a href="https://x.com/?lang=en"><i class="fa-brands fa-facebook" style={{textDecoration:'none',color:'white'}} target='_blank'></i></a>
            <a href="https://x.com/?lang=en"> <i class="fa-brands fa-github" style={{textDecoration:'none',color:'white'}} target='_blank'></i></a>
            <a href="https://x.com/?lang=en"><i class="fa-brands fa-whatsapp" style={{textDecoration:'none',color:'white'}} target='_blank'></i></a>
            <a href="https://x.com/?lang=en"><i class="fa-brands fa-youtube" style={{textDecoration:'none',color:'white'}} target='_blank'></i></a>
          </div>

         </div>
      </div>
      <p className='text-center mt-3'>copyright &copy;  may 2024 batch may meadia player bulit with react </p>
    </div>
  )
}

export default Footer