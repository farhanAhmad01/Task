import axios from "axios";
import React, { useEffect, useState } from "react";

function Task() {
  let [items, setItems] = useState(null);
  let [country, setCountry] = useState();
  let [sort, setSort] = useState(null);
  let [gender, setGender] = useState();
  let [sgender, setSgender] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetch() {
      await axios
        .get("https://randomuser.me/api/?results=100")
        .then((data) => setItems(data.data.results))
        .catch((error) => {
          console.log(error);
        });
    }
    fetch();
  }, []);

  function searchCountry() {
    if (country === "") {
      setSort(null);
    } else {
      let filterCountry = items.filter(
        (one) => one.location.country === country
      );
      setSort(filterCountry);
    }
  }

  function checkGender() {
    if (gender === "") {
      setSgender(null);
    } else {
      let filterGender = items.filter((get) => get.gender === gender);
      setSgender(filterGender);
    }
  }

  return (
    <div>
      <div className="country">
        <input
          type="text"
          value={country}
          placeholder="Search with country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <button
          onClick={() => {
            searchCountry();
          }}
        >
          Add
        </button>
      </div>
      <div className="gender">
        <input
          type="text"
          value={gender}
          placeholder="Enter Gender"
          onChange={(e) => setGender(e.target.value)}
        />
        <button onClick={() => checkGender()}>Add</button>
      </div>
      if(sgender == null)
      {
        <ul>
          {sgender.map((sg, index) => (
            <div key={index}>
              <img src={sg.picture.large} alt="Image not found" />
              <p>
                Name: {sg.name.first} {sg.name.last}
              </p>
              <p>Country: {sg.location.country}</p>
              <p>Gender: {sg.gender}</p>
            </div>
          ))}
        </ul>
      }
      else if (sort)
      {
        <ul>
          {sort.map((sorts, index) => (
            <div key={index}>
              <img src={sorts.picture.large} alt="Image not found" />
              <p>
                Name: {sorts.name.first} {sorts.name.last}
              </p>
              <p>Country: {sorts.location.country}</p>
              <p>Gender: {sorts.gender}</p>
            </div>
          ))}
        </ul>
      }
      else if (items)
      {
        <ul>
          {items.map((item, index) => (
            <div key={index}>
              <img src={item.picture.large} alt="Image not found" />
              <p>
                Name: {item.name.first} {item.name.last}
              </p>
              <p>Country: {item.location.country}</p>
              <p>Gender: {item.gender}</p>
            </div>
          ))}
        </ul>
      }{" "}
      else {<p>No data found</p>}
    </div>
  );
}

export default Task;
