// import axios from 'axios'

// const commonApi =async (httpMethod,url,reqBody) =>{
//   const  reqConfig ={
//     method: httpMethod,
//     url,
//     data: reqBody

//   }
//    return  await axios(reqConfig).then(res=>{
//     return res
//    }). catch(err=>{
//        return err 
//    })



// }

// export default commonApi


import axios from 'axios';

const commonApi = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
  };
  try {
    const res = await axios(reqConfig);
    return res;
  } catch (err) {
    // Log the error for debugging
    console.error("API error:", err);
    return err.response || err;  // Return the detailed error response if available
  }
};

export default commonApi;
