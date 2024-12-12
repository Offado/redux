export const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        payload: taskId,
    }
}