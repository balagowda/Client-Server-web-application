import axios from "axios";
import React, { useRef } from "react";

const UpdateModel = ({item, baseUrl}) => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const classRef = useRef(null);
  const idRef = useRef(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateStudent = {
      stud_name: nameRef.current.value,
      email_id: emailRef.current.value,
      contact: contactRef.current.value,
      class: classRef.current.value,
    };

    await axios
      .put(baseUrl + `update/${idRef.current.value}`, updateStudent)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
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
              <h5 className="modal-title" id={`exampleModalLabel-${item._id}`}>
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
              <form onSubmit={handleUpdate}>
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
                    defaultValue={item.stud_name}
                    ref={nameRef}
                  />
                  <input type="hidden" defaultValue={item._id} ref={idRef} />
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
                    defaultValue={item.class}
                    ref={classRef}
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
                    defaultValue={item.contact}
                    ref={contactRef}
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
                    defaultValue={item.email_id}
                    ref={emailRef}
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
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
