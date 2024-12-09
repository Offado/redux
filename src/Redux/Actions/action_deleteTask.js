import { initialState } from "../Reducers/rootReducer";

export const DELETE_TASK = 'DELETE_TASK';


export const deleteTask = newDelete => {
    initialState.tasks.filter((task) => task.id !== newDelete)
    return {
        type: DELETE_TASK,
        payload: newDelete
    }
}