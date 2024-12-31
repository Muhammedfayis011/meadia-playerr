import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllhistoryAPi } from '../sevices/allAPI'

const History = () => {
  const [allvideoHistory,setAllvideoHistory] = useState([])

  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async ()=>{
    try{
      const result = await getAllhistoryAPi()
       if(result.status>=200 && result.status<300)
       {
        setAllvideoHistory(result.data) 
       }else{
        console.log(result);
        
       }
    }catch(err){
      console.log(err);
      
    }
  }

  const removeHistory = async (id)=>{
    try{
       await deleteHistoryAPI(id)
       getAllHistory()
    }catch(err)
   {
    console.log(err);
   }
    
  }
  return (
    <div style={{ paddingTop:"100px" }}  >
      <div className='d-flex justify-content-between container '>
        <h3>watch history</h3>
        <Link to={'/home'}> Back to home</Link>

      </div>
      <table className='container my-5 table '>
        <thead>
          <tr>
            <th>#</th>
            <th>caption</th>
            <th>Link</th>
            <th>time stamp</th>
            <th>....</th>

          </tr>
        </thead>
        <tbody>
         {
          allvideoHistory?.length>0?
           allvideoHistory?.map((videoDetails,index)=>(
            <tr key={videoDetails} >
            <td>{index+1}</td>
            <td>{videoDetails?.caption}</td>
            <td>{videoDetails?.youtubeLink}</td>
            <td>{videoDetails?.timeStamp}</td>
            <td><button onClick={()=>removeHistory(videoDetails?.id)} className='btn
            '> <i class="fa-solid fa-trash text-danger"></i> </button></td>
          </tr>
           )):
           <div className='fw-bolder text-danger' >you didnt watch any video at</div>
         }
        </tbody>
      </table>
    </div>
  )
}

export default History