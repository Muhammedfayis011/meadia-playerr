import React, { useState } from 'react';
import Add from '../components/Add';
import View from '../components/View';
import { Link } from 'react-router-dom';
import Catgory from '../components/Catgory';

const Home = () => {
  // State for managing responses from child components
  const [deleteResponseFromView, SetDeleteResponseFromView] = useState(""); // For deleted video response from View
  const [deleteResponseFromCategory, setdeleteResponseFromCategory] = useState(""); // For deleted video response from Category
  const [addResponseFromHome, setAddResponseFromHome] = useState(""); // For added video response from Add

  return (
    <div style={{ paddingTop: "100px" }}>
      {/* Top section with Add button and link to Watch History */}
      <div className="d-flex justify-content-between container mb-5">
        <Add setAddResponseFromHome={setAddResponseFromHome} /> {/* Pass setAddResponseFromHome to Add component */}
        <Link to="/history">Watch History</Link>
      </div>

      {/* Main section with videos and categories */}
      <div className="row container-fluid my-5">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          {/* Pass props to View component for video management */}
          <View 
            SetDeleteResponseFromView={SetDeleteResponseFromView} 
            deleteResponseFromCategory={deleteResponseFromCategory} 
            addResponseFromHome={addResponseFromHome} 
          />
        </div>
        <div className="col-lg-6">
          <h3>Categories</h3>
          {/* Pass props to Catgory component for category management */}
          <Catgory 
            deleteResponseFromView={deleteResponseFromView} 
            SetDeleteResponseFromCategory={setdeleteResponseFromCategory} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
