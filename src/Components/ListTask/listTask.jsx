import React, { useState } from "react";
import listTask from "../ListTask/listTask.css";
import Task from "../Task/task";
import { useSelector } from "react-redux";


const ListTask = () => {
  const task = useSelector((state) => state.task);
  return (
    <div className="container-listTask">
      {
        task.map((todo) => {
          return (
            <Task todo={todo} key={todo.id} />
          )
        })
      }
    </div>
  );
};

export default ListTask;
