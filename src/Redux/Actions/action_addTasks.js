export const ADD_Task = 'ADD_Task';

export const ADDTask = (newTask) => {
    return {
        type: ADD_Task,
        payload: newTask,
    }
}