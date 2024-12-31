import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { deletecategoryAPI, getALLCatgoryAPI, removeVideoAPI, savecatgoryAPI, updateCatgoryAPI } from '../sevices/allAPI';
import VideoCard from './VideoCard';

const Category = ({ setdeleteResponseFromCategory, deleteResponseFromView }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [show, setShow] = useState(false);

  // Modal control
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories();
  }, [deleteResponseFromView]);

  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] };
      try {
        const result = await savecatgoryAPI(categoryDetails);
        alert('Category created');
        getAllCategories();
        handleClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please provide category name!');
    }
  };

  const getAllCategories = async () => {
    try {
      const result = await getALLCatgoryAPI();
      if (result?.status >= 200 && result?.status < 300) {
        setAllCategories(result?.data || []);
      }
    } catch (err) {
      console.log('Error fetching categories:', err);
    }
  };

  const removeCategory = async (id) => {
    try {
      await deletecategoryAPI(id);
      getAllCategories();
    } catch (err) {
      console.log(err);
    }
  };

  const videoCardDropOverCategory = async (e, categoryDetail) => {
    console.log("Inside videoCardDropOverCategory");
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    console.log(videoDetails);
    
    categoryDetail.allVideos.push(videoDetails);
    console.log(categoryDetail);
    
    // API call to update the category
    await updateCatgoryAPI(categoryDetail);
    getAllCategories();
    
    // Remove the video from the original place
    const result = await removeVideoAPI(videoDetails?.id);
    setdeleteResponseFromCategory(result);
  };

  const dragOverCategory = (e) => {
    e.preventDefault();
  };

  const categoryVideoDragStarted = (e, dragVideoDetails, categoryDetail) => {
    console.log("inside categoryVideoDragStarted");
    let dragData = { video: dragVideoDetails, categoryDetail };
    e.dataTransfer.setData("dragData", JSON.stringify(dragData));
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>All Categories</h3>
        <button onClick={handleShow} className="btn btn-info rounded-circle fw-bolder fs-5">
          +
        </button>
      </div>

      <div className="container-fluid mt-3 mb-3">
        {allCategories?.length > 0 ? (
          allCategories?.map((categoryDetail, index) => (
            <div
              data-droppable="true"
              onDragOver={dragOverCategory}
              onDrop={(e) => videoCardDropOverCategory(e, categoryDetail)}
              key={categoryDetail?.id || index}
              className="border rounded p-3 mb-3"
            >
              <div className="d-flex justify-content-between">
                <h5>{categoryDetail?.categoryName}</h5>
                <button
                  onClick={() => removeCategory(categoryDetail?.id)}
                  className="btn"
                >
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </div>
              <div className="row mt-2">
                {categoryDetail?.allVideos?.length > 0 &&
                  categoryDetail?.allVideos?.map((video) => (
                    <div
                      key={video?.id}
                      className="col-lg-4"
                      draggable={true}
                      onDragStart={(e) => categoryVideoDragStarted(e, video, categoryDetail)}
                    >
                      <VideoCard insideCategory={true} displayData={video} />
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="fw-bolder text-danger fs-5">No categories are added yet!</div>
        )}
      </div>

      <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel className="mt-2" controlId="floatingCategoryName" label="Category Name">
            <Form.Control
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)} // Corrected typo
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Category;
