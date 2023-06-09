import { useForm } from "react-hook-form";
import "./UserForm.css";

const UserForm = ({ onClose, onSend, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  function onSubmit(data) {
    if (initialData) onSend({ id: initialData.id, ...data });
    else onSend(data);
  }

  return (
    // <div>
    <form className="user-form" onSubmit={handleSubmit(onSend)}>
      <h2>{initialData ? "Edit user" : "Create new user"}</h2>

      <button
        type="button"
        className="user-form__close_btn"
        onClick={() => onClose()}
      >
        X
      </button>
      <div className="user-form__inputs">
        <div className="user-form__input_cont">
          <label htmlFor="nameId" className="user-form__label">
            First name
          </label>
          <input
            type="text"
            placeholder="Your name"
            id="nameId"
            {...register("first_name")}
          />
        </div>
        <div className="user-form__input_cont">
          <label htmlFor="lastNameId" className="user-form__label">
            Last name
          </label>
          <input
            type="text"
            placeholder="Your last name"
            id="lastNameId"
            {...register("last_name")}
          />
        </div>
        <div className="user-form__input_cont">
          <label htmlFor="eMailId" className="user-form__label">
            Email
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            id="eMailId"
            {...register("email")}
          />
        </div>
        <div className="user-form__input_cont">
          <label htmlFor="passwordId" className="user-form__label">
            Password
          </label>
          <input
            type="password"
            placeholder="***"
            id="passwordId"
            {...register("password")}
          />
        </div>
        <div className="user-form__input_cont">
          <label htmlFor="birthdayId" className="user-form__label">
            Birth date
          </label>
          <input type="date" id="birthdayId" {...register("birthday")} />
        </div>
      </div>
      <button type="submit" className="user-form__submit">
        {initialData ? "Save changes" : "Add new user"}
      </button>
    </form>
    // </div>
  );
};

export default UserForm;
