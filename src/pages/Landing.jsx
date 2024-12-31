//rafce

import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/musichead.gif'
import music1 from '../assets/music1.jpeg'
import music2 from '../assets/music2.jpeg'
import music3 from '../assets/music3.jpeg'
import {  Card } from 'react-bootstrap'



const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container '>
      <div className='row align-item-center  mt-5'>
        <div className='col-lg-5'>
          <h4 >Welcome to <span className='text-warning'> Meadia Player</span></h4>
          <p style={{ teaxtAlign: 'justify' }} className='mt-3'>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!

          </p>
          <Link to={'/home'} className='btn btn-info mt-3' >Get started</Link>
        </div>
        <div className='col'></div>
        {/* image */}
        <div className=' col-lg-4'  >
          <img  src={landingImg} className='img-fluid    ' height="100%" style={{width:"100%"}} alt="" />
        </div>

      </div>

      {/* feature */}
      <div className='mt-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'>

                <Card style={{ width: '20rem' }}>
              <Card.Img height={'230px'} variant="top" src={music1} />
              <Card.Body>
                <Card.Title>Managing videos</Card.Title>
                <Card.Text>
                  user Ca upload ,view and remove th videos
                </Card.Text>
                
                 </Card.Body>
                </Card>

          </div>
          <div className='col-lg-4'>

                <Card style={{ width: '20rem' }}>
              <Card.Img height={'230px'} variant="top" src={music2} />
              <Card.Body>
                <Card.Title>categories videos</Card.Title>
                <Card.Text>
                  user Can catgories  the videos by drag and drop feature
                </Card.Text>
                
                 </Card.Body>
                </Card>

          </div>
          <div className='col-lg-4'>

                <Card style={{ width: '20rem' }}>
              <Card.Img height={'230px'} variant="top" src={music3} />
              <Card.Body>
                <Card.Title>Managing videos</Card.Title>
                <Card.Text>
                  user Ca upload ,view and remove th videos
                </Card.Text>
                
                 </Card.Body>
                </Card>

          </div>


        </div>
      </div>


      {/* last */}
      <div className='my-5 row align-items-center  border rounded p-5'>

        <div className="col-lg-5">

          <h3 className='text-warning'>Simple, Fast and powerful </h3>
          <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at minus officia ex labore iste aspernatur nihil fugit expedita magni provident voluptatibus quam modi eligendi neque illum cumque, molestiae porro!</p>


          <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>categories videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at minus officia ex labore iste aspernatur nihil fugit expedita magni provident voluptatibus quam modi eligendi neque illum cumque, molestiae porro!</p>


          <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>Managing History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at minus officia ex labore iste aspernatur nihil fugit expedita magni provident voluptatibus quam modi eligendi neque illum cumque, molestiae porro!</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="360" src="https://www.youtube.com/embed/_H7QgRvKKdA" title="99% ആളുകൾക്കും ഇതറിയില്ല | Master ChatGPT with These 5 Pro Tips |The Home Worker Malayalam Video"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>
    </div>




  )
}

export default Landing