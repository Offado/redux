import { initialState } from "../Reducers/rootReducer";

export const ToggleTask = 'ToggleTask';


export const toggleTask = newToggle => {
    const task = initialState.tasks.find((task) => task.id === newToggle);
    if(task) {
        task.isDone = !task.isDone
    }

    return {
        type: ToggleTask,
        payload: newToggle
    }
    
}