import React from "react";
import task from "../Task/task.css";
import { useDispatch } from "react-redux";
import { MdDone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { toggleTask } from "../../Redux/Actions/action_toggleTask";
import { deleteTask } from "../../Redux/Actions/action_deleteTask";

const Task = ({ todo }) => {
  // Permet d'accéder au magasin Redux
  const dispatch = useDispatch();

  return (
    <div className="container-listTask">
      <div className="items">
        <ul>
          <li className={todo.isDone ? "complete" : "pending"}>
            {todo.description}
          </li>
          <span className="icons">
            <MdDone size={20} onClick={() => dispatch(toggleTask(todo.id))} />
            <CiEdit size={20} />
            <MdDelete size={20} onClick={() => dispatch(deleteTask(todo.id))} />
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Task;
