import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const Student = ({result, inputId, tagSearchQuery}) => {

  const [button, setButton] = useState("fa fa-plus");
  const [details, setDetails] = useState(false);
  const [tags, setTags] = useState([]);
  const [searching, setSearching] = useState(false);
  const [match, setMatch] = useState(false);

  useEffect(()=>{
    if(tagSearchQuery && tags.toString().toLocaleLowerCase()
    .includes(tagSearchQuery.toString().toLowerCase())) {
      setSearching(true);
      setMatch(true);
    }
    if(tagSearchQuery && !tags.toString().toLocaleLowerCase()
    .includes(tagSearchQuery.toString().toLowerCase())) {
      setSearching(true);
      setMatch(false);
    }
    if(!tagSearchQuery) {
      setSearching(false);
      setMatch(false);
    }
  }, [tagSearchQuery, tags]);

  const handleClick = () => {
    button === "fa fa-plus" ? setButton('fa fa-minus') : setButton('fa fa-plus');
    !details ? setDetails(true) : setDetails(false);
  };

  const handleTags = (e) => {
    e.preventDefault();
    let input = document.getElementById(`${inputId}`);
    let text = document.getElementById(`${inputId}`).value;
    const myTags = [...tags];
    if(text) {
      myTags.push(text);
      setTags(myTags);
      input.value = '';
    }
    input.value = '';
  };

  const handleDelete = (e) => {
    const myTags = [...tags];
    const innerText = e.currentTarget.parentNode.innerText;
    console.log("mytags", myTags);
    console.log("innertext", innerText);
    if(myTags.includes(innerText)) {
      const res = _.pull(myTags, innerText);
      setTags(res);
    }
  };

  if(searching && !match) return null;
  if((searching && match)||(!searching && !match)) {
  return (
    <div className="studentContainer">
      <div className="imageContainer pt-3">
        <img src={result.pic} alt="img" className="rounded-circle studentImage"/>
      </div>
      <div className="col mainCol">

        <div className="title">
          <h1>{`${result.firstName.toUpperCase()} ${result.lastName.toUpperCase()}`}</h1>
          <button id="expand-btn" className="myButton" onClick={handleClick}>
          <span className="icon"><i className={`${button} fa-2x`} aria-hidden="true"></i></span></button>
        </div>

        <div className="details">
          <p>{`Email: ${result.email}`}</p>
          <p>{`Company: ${result.company}`}</p>
          <p>{`Skill: ${result.skill}`}</p>

          <p className="mb-3">{`Average: ${_.mean(result.grades.map(ea => +ea)).toFixed(2)}%`}</p>

          {details && result.grades.map((g, idx) =>
          <p key={idx}>{`Test: ${g}%`}</p>)}

          {details ? tags.map((tag, i)=> <p className="myBadge mt-2 mr-2 px-2 py-1" key={i}>{tag}
          <span onClick={(e) => handleDelete(e)} className="deleteBtn ml-2"><i className="fa fa-plus tagIcon" aria-hidden="true"></i></span></p>):''}

          {details ?
          <form onSubmit={(e)=> handleTags(e)}>
            <input pattern="^[^\s].+[^\s]$" id={inputId} type="text" className="myTagInput" placeholder="Add a tag"/>
          </form>
          :''}

        </div>
      </div>
    </div>
  );}
};
export default Student;