import React, { useState } from "react";
import s from "./User.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { edit, editUser } from "../../Redax/editUser/action_creator";
import { removeUsers, saveEditUsers } from "../../Redax/editUser/operations";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextInput";
import Portal from "../Portal/Portal";
import Modal from "../Modal/Modal";

const User = ({ user }) => {
  const [activeDelete, setActiveDelete] = useState(false);
  const { name, surname, desc, id } = user;
  const dispatch = useDispatch();
  const saveEdit = (event) => {
    if (event.key === "Enter") {
      dispatch(
        saveEditUsers(id, {
          name: userName,
          surname: userSurname,
          desc: userDesc,
        })
      );
    }
  };
  const {
    userId,
    isEdit,
    processSave,
    name: userName,
    surname: userSurname,
    desc: userDesc,
  } = useSelector((state) => state.editor);

  return (
    <li
      className={`${s.user} collection-item row ${
        processSave && userId === id ? s.processSave : ""
      }`}
    >
      {isEdit && userId === id ? (
        <div className={`${s.editWrapper} row col s10`}>
          <div className="col s12 m6 l3">
            <TextInput
              value={userName}
              label={"Name"}
              onChange={(event) =>
                dispatch(editUser({ name: event.target.value }))
              }
              onKeyPress={saveEdit}
            />
          </div>
          <div className="col s12 m6 l3">
            <TextInput
              value={userSurname}
              label={"Surname"}
              onChange={(event) =>
                dispatch(editUser({ surname: event.target.value }))
              }
              onKeyPress={saveEdit}
            />
          </div>
          <div className="col s12 m12 l6">
            <TextArea
              value={userDesc}
              label={"Description"}
              onChange={(event) =>
                dispatch(editUser({ desc: event.target.value }))
              }
              onKeyPress={saveEdit}
            />
          </div>
        </div>
      ) : (
        <div className={`${s.wrapper} row col s10`}>
          <div className="col s12 m6 l3">
            <p className={`${s.user__name} `}>{name}</p>
          </div>
          <div className="col s12 m6 l3">
            <p className={`${s.user__surname}`}>{surname}</p>
          </div>
          <div className="col s12 m12 l6">
            <p className={`${s.user__desc}`}>{desc}</p>
          </div>
        </div>
      )}
      <div className={`${s.user__options} center-align col s2`}>
        {isEdit && userId === id ? (
          <i
            onClick={() =>
              dispatch(
                saveEditUsers(id, {
                  name: userName,
                  surname: userSurname,
                  desc: userDesc,
                })
              )
            }
            className={`${s.check} material-icons`}
          >
            check
          </i>
        ) : (
          <div>
            <i
              onClick={() => dispatch(edit({ id, name, surname, desc }))}
              className={`${s.edit} material-icons`}
            >
              edit
            </i>
            <i
              onClick={() => setActiveDelete(true)}
              className={`${s.delete} material-icons`}
            >
              delete
            </i>
          </div>
        )}
      </div>
      {activeDelete && (
        <Portal>
          <Modal
            title={"are you sure you want to delete the user?"}
            text1={"Yes"}
            fn1={() => dispatch(removeUsers(id))}
            text2={"No"}
            fn2={() => {
              setActiveDelete(false);
            }}
            onClick={() => setActiveDelete(false)}
          />
        </Portal>
      )}
    </li>
  );
};

export default User;
