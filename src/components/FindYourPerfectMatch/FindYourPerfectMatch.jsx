import React, { useState } from "react";
import "./FindYourPerfectMatch.css";

const FindYourPerfectMatch = () => {
  const [data, setData] = useState();
  const [age, setAge] = useState();

  const options = ["detail1", "detail2", "detail3", "detail4", "detail5"];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="findyourperfectmatch-Main">
      <div className="match-heading">
        <h2>Find your perfect <span className="span-tag"> match!</span></h2>
      </div>
      <div className="selectbox-sections">
        <select onChange={onOptionChangeHandler} className="selectbox-one">
          <option>Iam looking for</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>

        <select onChange={ageChangeHandler} className="selectbox-two">
          <option>age</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>

        <select onChange={onOptionChangeHandler} className="selectbox-three">
          <option>community</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default FindYourPerfectMatch;
