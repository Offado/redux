import React from "react";
import task from "../Task/task.css";
import { useDispatch } from "react-redux";


const Task = ({todo}) => {
    // Permet d'accéder au magasin Redux
  const dispatch = useDispatch();

  return (
    <div className="container-listTask">
      <ul>
        <li>{todo.description}</li>
      </ul>
    </div>
  );
}

export default Task;