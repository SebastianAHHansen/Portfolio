import React from 'react';
import {useNavigate} from 'react-router-dom';

function ErrorPage() {
    let navigate = useNavigate();
  return <div className="content">
      <h2>Page Error</h2>
      <h5>Back to Home Page</h5>
                <button class="btn btn-success" onClick={() => {
                    navigate("/")
                }}>Home Page</button>
      
  </div>;
}

export default ErrorPage;
