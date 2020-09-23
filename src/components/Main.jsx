import React, { useState, useEffect } from 'react';
import axios from 'axios';

import API_ENDPOINT from '../config/apiEndpoint';
import Student from './Student';
import Loading from './Loading';

const Main = () => {

  let inputId = 1;

  const [result, setResult] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [tagSearchQuery, setTagSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(()=> {
  //   setLoading(true);
  //   setTimeout(() => {
  //   axios.get(API_ENDPOINT)
  //   .then(res => {
  //     setResult(res.data.students)})
  //     .catch(err => console.log(err))
  //     setLoading(false);
  //   }, 1500);
  // }, []);

  useEffect(()=> {
    setLoading(true);
    async function getStudents() {
      const results = await axios(API_ENDPOINT);
      setResult(results.data.students);
      setLoading(false);
    }
    getStudents();
  },[]);

  return (
    <div className="mainContainer">

      <input id="name-input" type="text" className="myInput" placeholder="Search by name"
      onChange={(e)=>{setSearchQuery(e.target.value)}}/>
      <input id="tag-input" type="text" className="myInput" placeholder="Search by tag"
      onChange={(e)=>{setTagSearchQuery(e.target.value)}}/>

      <div className="studentList">

        {loading ? <Loading loading={loading}/> :
        result && result.filter(res => res.firstName.concat(res.lastName).toLowerCase()
        .includes(searchQuery.toLowerCase()))
        .map(res => <Student key={res.id} result={res} inputId={inputId++} tagSearchQuery={tagSearchQuery}/>)}

      </div>
    </div>
  );
};
export default Main;