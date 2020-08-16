import React, { useState } from 'react';
import _ from 'lodash';

const Student = ({result}) => {

  const [button, setButton] = useState("fa fa-plus");
  const [details, setDetails] = useState(false);

  const handleClick = () => {
    button === "fa fa-plus" ? setButton('fa fa-minus') : setButton('fa fa-plus');
    !details ? setDetails(true) : setDetails(false);
  }

  return (
    <div className="studentContainer">
      <div className="imageContainer">
        <img src={result.pic} alt="img" className="rounded-circle studentImage"/>
      </div>
      <div className="col mainCol">
        <div className="title">
          <h1>{`${result.firstName.toUpperCase()} ${result.lastName.toUpperCase()}`}</h1>
          <button className="myButton" onClick={handleClick}>
          <span className="icon"><i class={`${button} fa-2x`} aria-hidden="true"></i></span></button>
        </div>
        <div className="details">
          <p>{`Email: ${result.email}`}</p>
          <p>{`Company: ${result.company}`}</p>
          <p>{`Skill: ${result.skill}`}</p>
          <p className="mb-3">{`Average: ${_.mean(result.grades.map(ea => +ea)).toFixed(2)}%`}</p>
          {details && result.grades.map(g => 
          <p>{`Test: ${g}%`}</p>)}
        </div>
      </div>
    </div>
  );
}

export default Student;
