/* eslint-disable jsx-a11y/img-redundant-alt */
import "./api.css";
import axios from "axios";
import React, { useEffect, useState } from "react";


function Api() {
  let [item, setitem] = useState(null);
  console.log(item);

  useEffect(() => {
    let fetch = async () => {
      try {
        await axios
          .get("https://randomuser.me/api/?results=100")
          .then((take) => setitem(take.data.results));
      } catch (error) {
        console.log("error is", error);
      }
    };
    // console.log(item)
    fetch();
    // console.log(item)
  }, []);

  return (
    <div>
      {(item)?
        <ul>
          {item.map((items, index) => (
            <div id="card" key={index}>
              <img src={items.picture.large} alt="Image not found" />
              <p>
                Name: {items.name.first}
                {items.name.last}
              </p>
              <p>Email: {items.email}</p>
              <p>Country: {items.location.country}</p>
            </div>
          ))}
        </ul>
         :<p>Data is loading</p>
         }
    </div>
  );
}

export default Api;



