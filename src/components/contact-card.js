import React from 'react';


export default props=>{
  const {firstName, lastName, number, email} = props.contacts;
  return(
    <div className="col-6 my-3">
      <div className="card">
        <div className="card-head">Call me {lastName}</div>
        <div className="card-block">
          <h4 className="card-title">{firstName} {lastName}</h4>
          <div className="card-text">
            <p><strong>Phone: </strong>{number}</p>
            <p><strong>Email: </strong>{email}</p>
          </div>
        </div>
        <div className="card-footer">f</div>
      </div>
    </div>

  )
}
