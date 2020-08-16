import React from 'react';
import _ from 'lodash';

const Student = ({result}) => {

  return (
    <div className="studentContainer">
      <div className="imageContainer">
        <img src={result.pic} alt="img" className="rounded-circle studentImage"/>
      </div>
      <div className="col">
        <div className="title">
          <h1>{`${result.firstName.toUpperCase()} ${result.lastName.toUpperCase()}`}</h1>
        </div>
        <div className="details">
          <p>{`Email: ${result.email}`}</p>
          <p>{`Company: ${result.company}`}</p>
          <p>{`Skill: ${result.skill}`}</p>
          <p>{`Average: ${_.mean(result.grades.map(ea => +ea)).toFixed(2)}%`}</p>
        </div>
      </div>
    </div>
  );
}

export default Student;
