import React, { useState, useEffect } from 'react';
import "./api.css";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [maleUsers, setMaleUsers] = useState([]);
  const [femaleUsers, setFemaleUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=100');
        const jsonData = await response;
        setData(jsonData.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const maleUsersArray = data.filter(user => user.gender === 'male');
    const femaleUsersArray = data.filter(user => user.gender === 'female');
    
    setMaleUsers(maleUsersArray);
    setFemaleUsers(femaleUsersArray);
  }, [data]);
    
  return (
    <div className="App">
      <h1>User Cards</h1>
      <div className="cards">
        <div className="male-cards">
          <h2>Male</h2>
          {maleUsers.map((user, index) => (
            <div className="card" key={index}>
              <img src={user.picture.large} alt={user.name.first} />
              <h3>{user.name.first} {user.name.last}</h3>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
            </div>
          ))}
        </div>
        <div className="female-cards">
          <h2>Female</h2>
          {femaleUsers.map((user, index) => (
            <div className="card" key={index}>
              <img src={user.picture.large} alt={user.name.first} />
              <h3>{user.name.first} {user.name.last}</h3>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
