export const ADD_Task = 'ADD_Task';

export const addTask = newTask => {
    return {
        type: ADD_Task,
        payload: newTask
    }
}