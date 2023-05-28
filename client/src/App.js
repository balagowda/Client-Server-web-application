import React, { useEffect, useState } from "react";
//const axios = require('axios');
import "./App.css";

const App = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function getRecord() {
      const response = await fetch("http://localhost:8000/message");
      if (!response.ok) {
        window.alert(response.statusText);
        return;
      }

      const records = await response.json();
      setMessage(records);
    }
    getRecord();
  }, [message.length]);

  return (
    <div className="container1">
      <div className="navigator">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
      </div>

      <div className="body">
        <div className="container">
          <div className="row">
            {message.map((item) => {
              return(
              <div className="col-sm-3" key={item._id}>
                <div
                  className="card text-dark bg-light mb-3 shadow"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header">{item.email_id}</div>
                  <div className="card-body">
                    <h5 className="card-title">{item.stud_name}</h5>
                    <p className="card-text">
                      {item.contact}<br/>
                      {item.class}
                    </p>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
