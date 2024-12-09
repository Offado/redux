import { ADD_Task } from "../Actions/action_addTasks";
import { DELETE_TASK } from "../Actions/action_deleteTask";
import { ToggleTask } from "../Actions/action_toggleTask";

export const initialState = {
    tasks: []
}


const rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_Task :
            return {
                tasks: [...state.tasks, action.payload]
            }

        case ToggleTask :
            return {
                tasks: [...state.tasks, action.payload]
            }

        case DELETE_TASK :
            return {
                tasks: [...state.tasks, action.payload]
            }
    
        default:
            return state;
    }
}

export default rootReducer;