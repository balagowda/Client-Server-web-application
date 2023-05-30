import axios from "axios";
import React from "react";

const DeleteModel = ({ item, baseUrl }) => {

  const handleDelete = async () => {
    await axios
      .delete(baseUrl + `delete/${item._id}`)
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
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal1-${item._id}`}
      >
        Delete
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`exampleModal1-${item._id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel1-${item._id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`exampleModalLabel1-${item._id}`}>
                Warning :
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6> Are you sure you want to Delete "{item.stud_name}"</h6>
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
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
