import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { removeVideoAPI, saveHistoryAPI } from '../sevices/allAPI';

const VideoCard = ({ displayData, setDeleteVideoResponseFromVideoCard, insideCategory }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // Display modal
    setShow(true);
    // Store history in json
    const { caption, youtubeLink } = displayData;
    const sysDateTime = new Date();
    const timeStamp = sysDateTime.toLocaleString('en-US', { timeZoneName: 'short' });
    const historyDetails = { caption, youtubeLink, timeStamp };

    try {
      await saveHistoryAPI(historyDetails);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const result = await removeVideoAPI(id);
      setDeleteVideoResponseFromVideoCard(result);
    } catch (err) {
      console.log(err);
    }
  };

  const videoCardDragStarted = (e, dragVideoDetails) => {
    console.log("Inside videoCardDragStarted with videoId: " + dragVideoDetails?.id);
    e.dataTransfer.setData("videoDetails", JSON.stringify(dragVideoDetails));
  };

  return (
    <>
      <Card draggable={true} onDragStart={(e) => videoCardDragStarted(e, displayData)} style={{ width: '11rem', height: '13rem' }}>
        <Card.Img onClick={handleShow} height={`150px`} variant="top" src={displayData?.imgUrl} />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>
            {
              !insideCategory &&
              <button onClick={() => deleteVideo(displayData?.id)} className='btn'>
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            }
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="573"
            height="322"
            src={`${displayData?.youtubeLink}?autoplay=1`}
            title="Video"
            border="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
