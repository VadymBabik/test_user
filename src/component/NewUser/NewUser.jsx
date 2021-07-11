import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { editUser } from "../../Redax/editUser/action_creator";
import TextArea from "../TextArea/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { createNewUsers } from "../../Redax/editUser/operations";
import s from "./NewUser.module.scss";
import Modal from "../Modal/Modal";
import Portal from "../Portal/Portal";
import { useHistory } from "react-router-dom";

const NewUser = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    name: userName,
    surname: userSurname,
    desc: userDesc,
  } = useSelector((state) => state.editor);
  const onSubmit = () => {
    dispatch(
      createNewUsers({
        name: userName,
        surname: userSurname,
        desc: userDesc,
      })
    );
    setActive(true);
  };

  return (
    <div className="container">
      <h3 className="center-align">List user</h3>
      <ul className="collection ">
        <div className={`${s.wrapper} col s12`}>
          <TextInput
            value={userName}
            label={"Name"}
            onChange={(event) =>
              dispatch(editUser({ name: event.target.value }))
            }
          />
          <TextInput
            value={userSurname}
            label={"Surname"}
            onChange={(event) =>
              dispatch(editUser({ surname: event.target.value }))
            }
          />
          <TextArea
            value={userDesc}
            label={"Description"}
            onChange={(event) =>
              dispatch(editUser({ desc: event.target.value }))
            }
          />
          <button
            onClick={onSubmit}
            className={`btn indigo waves-effect waves-light ${
              userName && userSurname && userDesc ? "active" : "disabled"
            }`}
          >
            Save new user
            <i className="material-icons right">send</i>
          </button>
        </div>
      </ul>
      {active && (
        <Portal>
          <Modal
            title={"User created successfully!"}
            text1={"Go to list"}
            fn1={() => history.push("/")}
            text2={"Сreate new user"}
            fn2={() => {
              setActive(false);
            }}
            onClick={() => setActive(false)}
          />
        </Portal>
      )}
    </div>
  );
};

export default NewUser;
