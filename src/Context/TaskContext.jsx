import { createContext, useState } from "react";

export const TaskManagementTask = createContext(null)

const TaskContext = ({children}) => {

    const defaultTask ={
        'id': crypto.randomUUID(),
        'title': "Learn React",
        'description': 'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
        'tags': ['web', 'react', 'Js'],
        'priority': 'High',
        'isFavorite': true

    }
    const [showAddModal, setShowSetModal] = useState(false);
    const [tasks, setTasks] = useState([defaultTask]);



    // const handleEditTask =(task) =>{
    //     setShowSetModal(!showAddModal)
    //     // setEditTask(task);
    //     console.log(task)
    //   }

    const taskInfo ={
        tasks,
        setTasks,
        showAddModal,
        setShowSetModal,
    }

    return (
        <TaskManagementTask.Provider value={taskInfo}>
            {children}
        </TaskManagementTask.Provider>
    );
};

export default TaskContext;