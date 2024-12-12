import { ADD_Task } from "../Actions/action_addTasks";
import { DELETE_TASK } from "../Actions/action_deleteTask";
import { ToggleTask } from "../Actions/action_toggleTask";

// Variable initialState contenant l'objet tâches
const initialState = {
    tasks: [],
}


export const taskReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_Task:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],        // Ajoute une nouvelle tâche
            }
        
        case ToggleTask:
            return {
                ...state, // Prend en compte toutes les tâches
                    tasks: state.tasks.map((task) => {
                        return (
                            task.id === action.payload ? {...task, isDone: !task.isDone} : task
                    ) // Affiche toutes les tâches terminées 
                }),
            }

        case DELETE_TASK: 
            return {
                ...state, // Prend en compte toutes les tâches
                tasks: state.tasks.filter((task) => {
                    return (
                        task.id !== action.payload
                    ) // Supprime une tâche
                }),
            }
    
        default:
            return state;
    }
}


