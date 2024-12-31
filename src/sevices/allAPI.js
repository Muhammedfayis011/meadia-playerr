

import commonApi from "./commonApi";
import SERVERURL from "./serverURL";


// save videoAPI   = post http request,add component

export const saveVideoAPI = async (videoDetails) => {
  return await commonApi(`POST`, `${SERVERURL}/uploadVideos`, videoDetails);
};

//getALLvideoApi -get method, called view component ,when  component displayed in browser  inside is use effect hook

export const getALLvideoAPI = async (videoDetails) => {
  return await commonApi(`GET`, `${SERVERURL}/uploadVideos`,"");
};


//svae historyApi  - post http method  http://localhost:3000/history called by videocard when we click on video


export const saveHistoryAPI = async (historyDetails) => {
  return await commonApi('POST', `${SERVERURL}/history`, historyDetails);
};


//getAllhistoryAPi  get http request to  http://localhost:3000/history called by history component when it open it browser 

export const getAllhistoryAPi = async () => {
  return await commonApi(`GET`, `${SERVERURL}/history`,"");
};


//deleteHistory  delete method  http://localhost:3000/history/id  called by history  when clicked on delete button 

export const deleteHistoryAPI = async(id)=>{
  return await commonApi(`DELETE`, `${SERVERURL}/history/${id}`,{});

}

//remove videoAPI delete method to localhost:3000/home/id called by videocard when clicked delete button   

export const removeVideoAPI = async(id)=>{
  return await commonApi(`DELETE`, `${SERVERURL}/uploadVideos/${id}`,{});

}

//save catgory api -post request /  http://localhost:3000/categories called by catgory component when user click on add btn
//categorydetails ={catgoryName,allVideos}



export const savecatgoryAPI = async (CatgoryDetails) => {
  return await commonApi('POST', `${SERVERURL}/categories`, CatgoryDetails);
};


//getALLcatgoryApi -get method, called http://localhost:3000/categories    component when component loaded in browser
export const getALLCatgoryAPI = async () => {
  return await commonApi(`GET`, `${SERVERURL}/categories`,{});
};




//deletecatgoryAPI  delete method  http://localhost:3000/category/id  catgory component   when clicked on delete button 

export const deletecategoryAPI = async(id)=>{
  return await commonApi(`DELETE`, `${SERVERURL}/categories/${id}`,{});

}



//getALLcatgoryApi -put method, called http://localhost:3000/categories/id    called by category component when video drop over the catgory 
export const updateCatgoryAPI = async (CatgoryDetails) => {
  return await commonApi(`PUT`, `${SERVERURL}/categories/${CatgoryDetails.id}`,CatgoryDetails);
};