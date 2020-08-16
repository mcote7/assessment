import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_ENDPOINT from '../config/apiEndpoint';
import Student from './Student';

const Main = () => {

  const [result, setResult] = useState("");

  useEffect(()=> {
    axios.get(API_ENDPOINT)
    .then(res => {
      console.log("response",res.data.students)
      setResult(res.data.students)})
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="mainContainer">
      <input type="text" className="myInput" placeholder="Search by name"/>
      <div className="studentList">
        {result && result.map(res => <Student key={res.id} result={res}/>)}
      </div>
    </div>
  );
};
export default Main;