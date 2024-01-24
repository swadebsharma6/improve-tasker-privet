import { createContext } from "react";

export const TaskManagementTask = createContext(null)

const TaskContext = ({children}) => {

    const user ='Swadeb Sharma';

    const taskInfo ={
        user,
    }

    return (
        <TaskManagementTask.Provider value={taskInfo}>
            {children}
        </TaskManagementTask.Provider>
    );
};

export default TaskContext;