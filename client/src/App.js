import React, { useEffect, useRef, useState } from "react";
//const axios = require('axios');
import "./App.css";
// import Axios from "./Axios";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState([]);
  const baseUrl = "http://localhost:8000/";

  const nameRef = useRef(null);
  const classRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = {
      stud_name: nameRef.current.value,
      email_id: emailRef.current.value,
      contact: contactRef.current.value,
      class: classRef.current.value,
    };

    await axios
      .post(baseUrl + "add", newStudent)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

                      {/* <!-- Button trigger modal --> */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal-${item._id}`}
                      >
                        Update
                      </button>

                      {/* <!-- Modal --> */}
                      <div
                        className="modal fade"
                        id={`exampleModal-${item._id}`}
                        tabIndex="-1"
                        aria-labelledby={`exampleModalLabel-${item._id}`}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id={`exampleModalLabel-${item._id}`}
                              >
                                Edit Details
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                  <label
                                    htmlFor={`exampleInputName-${item._id}`}
                                    className="form-label"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`exampleInputName-${item._id}`}
                                    aria-describedby="emailHelp"
                                    value={item.stud_name}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor={`exampleInputClass-${item._id}`}
                                    className="form-label"
                                  >
                                    Class
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`exampleInputClass-${item._id}`}
                                    aria-describedby="emailHelp"
                                    value={item.class}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor={`exampleInputContact-${item._id}`}
                                    className="form-label"
                                  >
                                    Contact
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`exampleInputContact-${item._id}`}
                                    aria-describedby="emailHelp"
                                    value={item.contact}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor={`exampleInputEmail1-${item._id}`}
                                    className="form-label"
                                  >
                                    Email address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id={`exampleInputEmail1-${item._id}`}
                                    aria-describedby="emailHelp"
                                    value={item.email_id}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Save changes
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Add student
          </button>
          <br />
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    ref={nameRef}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputClass" className="form-label">
                    Class
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputClass"
                    aria-describedby="emailHelp"
                    ref={classRef}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputContact" className="form-label">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputContact"
                    aria-describedby="emailHelp"
                    ref={contactRef}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    ref={emailRef}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
