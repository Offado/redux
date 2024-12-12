import React, { useState } from "react";
import addTask from "../AddTask/addTask.css";
import { useDispatch } from "react-redux";
import { ADDTask } from "../../Redux/Actions/action_addTasks";

const AddTask = () => {
  // Liste des tâches
  const [newTask, setNewTask] = useState({});
  // Nouvelle tâche
  const [description, setDescription] = useState("");
  // Dispatcher l'action de la tâche dans le magasin
  const dispatch = useDispatch();

  // Fonction pour ajouter une tâche
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(ADDTask(newTask));
    setDescription("");
  };

  // Fonction de mise à jour d'une tâche
  const handleChange = (e) => {
    setDescription(e.target.value);
    const taskChange = {
      id: Math.random() * 1000,
      description: e.target.value,
      isDone: false,
    };
    setNewTask(taskChange);
  };

  return (
    <div className="container-addTask">
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="addTask"
          value={description}
          onChange={handleChange}
          className="input-addTask"
          placeholder="Entrer une tâche"
          required
        />
        <button className="btn-addTask" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddTask;
