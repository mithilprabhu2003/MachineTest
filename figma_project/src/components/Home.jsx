import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const employees = [
    { id: 1, name: "Name", add1: "Address 1", add2: "Address 2" },
    { id: 2, name: "Name", add1: "Address 1", add2: "Address 2" },
    { id: 3, name: "Name", add1: "Address 1", add2: "Address 2" },
    { id: 4, name: "Name", add1: "Address 1", add2: "Address 2" },
  ];
  const handle_icon = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="heading">
        <span className="side_icon" onClick={handle_icon}>
          ☰
        </span>
        <h1>Employees</h1>
      </div>
      {open ? (
        <div className="sidebar">
          <h3>Settings</h3>
          <h3>About us</h3>
          <h3>Contact us</h3>
        </div>
      ) : (
        ""
      )}
      <div className="hello_img"></div>
      <div className="filters">
        <button>All</button>
        <button>City 1</button>
        <button>City 2</button>
      </div>
      <div className="obj_data">
        {employees.map((elem) => {
          let { name, add1, add2 } = elem;
          return (
            <div key={elem.id} className="card">
              <div className="left">
                <h4>{name}</h4>
                <p>{add1}</p>
                <p>{add2}</p>
              </div>
              <span className="designation">Designation</span>
            </div>
          );
        })}
      </div>
      <div className="bottom_nav">
        <div className="items">
          <div className="icon"></div>
          <h5>Status</h5>
        </div>

        <div className="items">
          <div className="icon"></div>
          <h5>Calls</h5>
        </div>

        <div className="items">
          <div className="icon"></div>
          <h5>Chats</h5>
        </div>

        <div className="items">
          <div className="icon"></div>
          <h5 >Settings</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
