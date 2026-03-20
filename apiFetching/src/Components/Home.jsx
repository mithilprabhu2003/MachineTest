import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css"

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  let data = async () => {
    let fetch = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(fetch.data);
    setFilteredUsers(fetch.data);
  };
  useEffect(() => {
    data();
  }, []);
  useEffect(() => {
    let savedCity = localStorage.getItem("city");

    if (savedCity) {
      handleCity(savedCity);
    }
  }, [users]);

  let cities = ["All", ...users.map((elem) => elem.address.city)];

  let handleCity = (city) => {
    localStorage.setItem("city", city);
    if (city === "All") {
      setFilteredUsers(users);
    } else {
      let newArr = users.filter((elem) => {
        return elem.address.city === city;
      });
      setFilteredUsers(newArr);
    }
  };

  return (
    <div>
      <div className="filters">
        {cities.map((elem, index) => {
          return (
            <button key={index} onClick={() => handleCity(elem)}>
              {elem}
            </button>
          );
        })}
      </div>
      <div>
        {filteredUsers.map((elem) => {
          return (
            <div key={elem.id} className="card">
              <h4>{elem.name}</h4>
              <p>{elem.address.city}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
