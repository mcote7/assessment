import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_ENDPOINT from '../config/apiEndpoint';
import Student from './Student';

const Main = () => {

  const [result, setResult] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=> {
    axios.get(API_ENDPOINT)
    .then(res => {
      console.log("response",res.data.students)
      setResult(res.data.students)})
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="mainContainer">
      <input id="name-input" type="text" className="myInput" placeholder="Search by name"
      onChange={(e)=>{setSearchQuery(e.target.value)}}/>
      <div className="studentList">
        {result && result.filter(res => res.firstName.concat(res.lastName).toLowerCase()
        .includes(searchQuery.toLocaleLowerCase()))
        .map(res => <Student key={res.id} result={res}/>)}
      </div>
    </div>
  );
};
export default Main;