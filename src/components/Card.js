import React from 'react';

const Card = ({ name, email, id, username }) => {
  return (
    <div className="card">
        <video width="400" controls>
            <source src={`./Vid/${ username }`} type="video/mp4"/>
            Your browser does not support HTML5 video.
          </video>
        <div className="card-body">
          <div className="container">
            <h5><b>{ name }</b></h5>
            <p>{ email }</p>
          </div>
        </div>
      </div>
  );
}

export default Card;
