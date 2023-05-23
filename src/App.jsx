import { useEffect, useState } from "react";
import { getAllUsers } from "./services/getAllUsers";
import { createUser } from "./services/createUser";
import { updateUser } from "./services/updateUser";
import { deleteUser } from "./services/deleteUser";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/UserForm/UserForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [userDataEditing, setUserDataEditing] = useState(null);

  async function loadUsers() {
    const userData = await getAllUsers();
    setUsers(userData);
  }

  function handleCreate() {
    setVisibleModal(true);
  }

  async function handleSend(data) {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);
    await loadUsers();
    setVisibleModal(false);
  }

  function handleEdit(userData) {
    setVisibleModal(true);
    setUserDataEditing(userData);
  }

  async function handleDelete(id) {
    await deleteUser(id);
    await loadUsers();
  }

  function handleCloseModal() {
    setUserDataEditing(null);
    setVisibleModal(false);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Header onCreate={handleCreate} />

      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal isVisible={visibleModal}>
        <UserForm
          onClose={handleCloseModal}
          onSend={handleSend}
          initialData={userDataEditing}
        />
      </Modal>
    </>
  );
}

export default App;
