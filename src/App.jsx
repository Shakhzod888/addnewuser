import { useState, useEffect } from "react";

import "./App.css";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/userList";
import NewUserForm from "./components/newForm/newUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addUser = (user) => {
    setUsers((prev) => {
      const updatedUsers = [...prev, user];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
    setShowModal(false);
  };

  const deleteUser = (id) => {
    setUsers((prev) => {
      const updatedUsers = prev.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        {!users.length && (
          <div className="no-users">
            <h2>No users</h2>
          </div>
        )}
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal ? (
        <NewUserForm addUser={addUser} setShowModal={setShowModal} />
      ) : (
        ""
      )}
      <button
        className="create-user"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
