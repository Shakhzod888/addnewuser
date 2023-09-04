/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./newUserForm.css";
import { v4 as uuidv4 } from "uuid";

function NewUserForm({ setShowModal, addUser }) {
  const [newUser, setNewUser] = useState([
    {
      id: uuidv4(),
      image: "",
      firstName: "",
      lastName: "",
      age: null,
      from: "",
      job: "",
      gender: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser);
  };

  return (
    <>
      <div className="modal-wrapper">
        <div className="overlay">
          <div className="modal">
            <div className="headOfForm">
              <h2>Create New User</h2>
              <h4
                onClick={() => {
                  setShowModal(false);
                }}
              >
                X
              </h4>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Image URL:</span>
                <input
                  onChange={(e) => {
                    setNewUser((prev) => {
                      return { ...prev, image: e.target.value };
                    });
                  }}
                  type="url"
                  required
                />
              </label>
              <label>
                <span>First Name:</span>
                <input
                  onChange={(e) => {
                    setNewUser((prev) => {
                      return { ...prev, firstName: e.target.value };
                    });
                  }}
                  type="text"
                  required
                />
              </label>
              <label>
                <span>Last Name:</span>
                <input
                  onChange={(e) => {
                    setNewUser((prev) => {
                      return { ...prev, lastName: e.target.value };
                    });
                  }}
                  type="text"
                  required
                />
              </label>
              <label>
                <span>Age:</span>
                <input
                  onChange={(e) => {
                    setNewUser((prev) => {
                      return { ...prev, age: e.target.value };
                    });
                  }}
                  type="number"
                  required
                />
              </label>
              <label>
                <span>From:</span>
                <input
                  onChange={(e) => {
                    setNewUser((prev) => {
                      return { ...prev, from: e.target.value };
                    });
                  }}
                  type="text"
                  required
                />
              </label>
              <label>
                <span>Job:</span>
                <input
                  onChange={(e) => {
                    setNewUser((prev) => {
                      return { ...prev, job: e.target.value };
                    });
                  }}
                  type="text"
                  required
                />
              </label>
              <div className="gender">
                <span>Gender:</span>
                <label>
                  <small>Male</small>
                  <input
                    onChange={(e) => {
                      setNewUser((prev) => {
                        return { ...prev, gender: e.target.value };
                      });
                    }}
                    type="radio"
                    required
                    name="gender"
                    value="male"
                  />
                </label>
                <label>
                  <small>Female</small>
                  <input
                    onChange={(e) => {
                      setNewUser((prev) => {
                        return { ...prev, gender: e.target.value };
                      });
                    }}
                    type="radio"
                    required
                    name="gender"
                    value="Female"
                  />
                </label>
              </div>
              <button className="modal-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewUserForm;
