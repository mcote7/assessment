import React from 'react';

const Student = ({result}) => {
  return (
    <div className="studentContainer">{result.firstName}</div>
  );
}

export default Student;