import "./UserList.css";

const UserList = ({ users, onEdit, onDelete }) => {
  if (!users?.length) return <p>There are no users</p>;

  return (
    <div className="user-list__cont">
      <ul className="user-list__list">
        {users?.map((user) => (
          <li key={user.id} className="user-list__user">
            <article>
              <h2 className="user_names">
                {user.last_name}, {user.first_name}
              </h2>
              <p className="user_email">{user.email}</p>
              <p className="user_birthday">
                <i className="fa-solid fa-cake-candles"></i> {user.birthday}
              </p>
              <div className="user-list__btns_cont">
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
