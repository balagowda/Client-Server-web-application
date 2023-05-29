import axios from "axios";
import React, { useRef } from "react";

const AddStudent = ({baseUrl}) => {

  const nameRef = useRef(null);
  const classRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);

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

    window.location.reload(true);
  };

  return (
    <div>
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
  );
};

export default AddStudent;
