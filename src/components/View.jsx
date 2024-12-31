// import React, { useEffect, useState } from 'react';
// import { Row, Col } from 'react-bootstrap';
// import VideoCard from './VideoCard';
// import { getALLvideoAPI, saveVideoAPI, updateCatgoryAPI } from '../sevices/allAPI';
// import Catgory from './Catgory';

// const View = ({ addResponseFromHome, deleteResponseFromCategory, SetDeleteResponseFromView }) => {
//   const [DeleteVideoResponseFromVideoCard, setDeleteVideoResponseFromVideoCard] = useState('');
//   const [allvideos, setAllvideos] = useState([]);

//   // Fetch all videos whenever dependencies change
//   useEffect(() => {
//     getALLvideos();
//   }, [addResponseFromHome, deleteResponseFromCategory, DeleteVideoResponseFromVideoCard]);

//   const getALLvideos = async () => {
//     try {
//       const result = await getALLvideoAPI();
//       console.log(result);

//       if (result.status >= 200 && result.status < 300 && Array.isArray(result.data)) {
//         setAllvideos(result.data);
//       } else {
//         console.log('API call failed or data is not in expected format');
//       }
//     } catch (err) {
//       console.log('Error fetching videos:', err);
//     }
//   };

//   // Drag-over event to allow video to be dragged into the view area
//   const dragOverView = (e) => {
//     e.preventDefault();
//   };

//   // Handle the drop event when a video is dragged over the view area
//   const categoryVideoDragOverView = async (e) => {
//     console.log('Inside categoryVideoDragOverView');
//     const { video, categoryDetails } = JSON.parse(e.dataTransfer.getData('dragData'));
//     console.log('Video:', video, 'Category:', categoryDetails);

//     // Remove video from the category's list
//     const updatedCategoryVideoList = categoryDetails?.allVideos?.filter((item) => item.id !== video?.id);
//     const updateCategory = { ...categoryDetails, allVideos: updatedCategoryVideoList };
//     console.log(updateCategory);


//     // Update the category by removing the video
//     const result = await updateCatgoryAPI(updateCategory);
//     SetDeleteResponseFromView(result);

//     // Re-upload the video after deleting it from the category
//     await saveVideoAPI(video);
//     getALLvideos() // Refresh the video list

//   }


//   return (
//     <>
//       <Row droppable="true" onDragOver={dragOverView} onDrop={(e) => categoryVideoDragOverView(e)}>
//         {allvideos?.length > 0 ? (
//           allvideos.map((video) => (
//             <Col key={video?.id || video?.caption || video?.index} className="mb-2" sm={12} md={6} lg={4}>
//               <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video} />
//             </Col>
//           ))
//         ) : (
//           <div className="fw-bolder text-danger">No videos are uploaded</div>
//         )}
//       </Row>
//     </>
//   );
// };

// export default View;



import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { getALLvideoAPI, saveVideoAPI, updateCatgoryAPI } from '../sevices/allAPI';
import Catgory from './Catgory';

const View = ({ addResponseFromHome, deleteResponseFromCategory, SetDeleteResponseFromView }) => {
  const [DeleteVideoResponseFromVideoCard, setDeleteVideoResponseFromVideoCard] = useState('');
  const [allvideos, setAllvideos] = useState([]);

  // Fetch all videos whenever dependencies change
  useEffect(() => {
    getALLvideos();
  }, [addResponseFromHome, deleteResponseFromCategory, DeleteVideoResponseFromVideoCard]);

  const getALLvideos = async () => {
    try {
      const result = await getALLvideoAPI();
      console.log(result);

      if (result.status >= 200 && result.status < 300 && Array.isArray(result.data)) {
        setAllvideos(result.data);
      } else {
        console.log('API call failed or data is not in expected format');
      }
    } catch (err) {
      console.log('Error fetching videos:', err);
    }
  };

  // Drag-over event to allow video to be dragged into the view area
  const dragOverView = (e) => {
    e.preventDefault();
  };

  // Handle the drop event when a video is dragged over the view area
  const categoryVideoDragOverView = async (e) => {
    console.log('Inside categoryVideoDragOverView');
    const { video, categoryDetails } = JSON.parse(e.dataTransfer.getData('dragData'));
    console.log('Video:', video, 'Category:', categoryDetails);

    // Remove video from the category's list
    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter((item) => item.id !== video?.id);
    const updateCategory = { ...categoryDetails, allVideos: updatedCategoryVideoList };
    console.log('Updated Category:', updateCategory);

    try {
      // Update the category by removing the video
      const result = await updateCatgoryAPI(updateCategory);
      SetDeleteResponseFromView(result);

      // Re-upload the video after deleting it from the category
      await saveVideoAPI(video);
      getALLvideos(); // Refresh the video list

    } catch (err) {
      console.log('Error updating category or saving video:', err);
    }
  };

  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={(e) => categoryVideoDragOverView(e)}>
        {allvideos?.length > 0 ? (
          allvideos.map((video) => (
            <Col key={video?.id || video?.caption || video?.index} className="mb-2" sm={12} md={6} lg={4}>
              <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video} />
            </Col>
          ))
        ) : (
          <div className="fw-bolder text-danger">No videos are uploaded</div>
        )}
      </Row>
    </>
  );
};

export default View;
