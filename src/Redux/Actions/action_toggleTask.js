export const ToggleTask = 'ToggleTask';

export const toggleTask = (taskId) => {
    return {
        type: ToggleTask,
        payload: taskId,
    }
    
}