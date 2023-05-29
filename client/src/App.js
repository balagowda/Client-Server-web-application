import React, { useEffect, useState } from "react";
//const axios = require('axios');
import "./App.css";
// import Axios from "./Axios";
import axios from "axios";
import UpdateModel from "./UpdateModel";
import AddStudent from "./AddStudent";

const App = () => {
  const [message, setMessage] = useState([]);
  const baseUrl = "http://localhost:8000/";

  useEffect(() => {
    async function getRecord() {
      const response = await axios.get(baseUrl + "message");
      if (response.status != 200) {
        window.alert(response.statusText);
        return;
      }
      setMessage(response.data);
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

      {/* /*------------dynamic data using map function------------------*/}
      <div className="body">
        <div className="container">
          <div className="row">
            {message.map((item) => {
              return (
                <div className="col-sm-3" key={item._id}>
                  <div
                    className="card text-dark bg-light mb-3 shadow"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">{item.email_id}</div>
                    <div className="card-body">
                      <h5 className="card-title">{item.stud_name}</h5>
                      <p className="card-text">
                        {item.contact}
                        <br />
                        {item.class}
                      </p>

                      <UpdateModel item={item} baseUrl={baseUrl} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <AddStudent baseUrl={baseUrl} />
        </div>
      </div>
    </div>
  );
};

export default App;
