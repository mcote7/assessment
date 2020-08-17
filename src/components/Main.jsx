import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_ENDPOINT from '../config/apiEndpoint';
import Student from './Student';

const Main = () => {

  let inputId = 1;

  const [result, setResult] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [tagSearchQuery, setTagSearchQuery] = useState("");

  useEffect(()=> {
    axios.get(API_ENDPOINT)
    .then(res => {
      setResult(res.data.students)})
    .catch(err => console.log(err))
  }, []);

    // console.log("tagQuery", tagSearchQuery);

  return (
    <div className="mainContainer">
      <input id="name-input" type="text" className="myInput" placeholder="Search by name"
      onChange={(e)=>{setSearchQuery(e.target.value)}}/>
      <input id="tag-input" type="text" className="myInput" placeholder="Search by tag"
      onChange={(e)=>{setTagSearchQuery(e.target.value)}}/>
      <div className="studentList">

        {result && result.filter(res => res.firstName.concat(res.lastName).toLowerCase()
        .includes(searchQuery.toLocaleLowerCase()))
        .map(res => <Student key={res.id} result={res} inputId={inputId++} tagSearchQuery={tagSearchQuery}/>)}


        {/* {result && result.filter(res => res.firstName.concat(res.lastName).toLowerCase()
        .includes(searchQuery.toLocaleLowerCase()))
        .map(res => <Student key={res.id} result={res} inputId={inputId++}/>)} */}


      </div>
    </div>
  );
};
export default Main;