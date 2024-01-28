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
    const [showEditModal, setShowEditModal] = useState(false);
    const [tasks, setTasks] = useState([defaultTask]);

    const handleDeleteAllClick =()=>{
        tasks.length = 0;
        setTasks([...tasks]);
        alert('Delete all Task successfully')
    }

    const taskInfo ={
        tasks,
        setTasks,
        showAddModal,
        setShowSetModal,
        showEditModal, setShowEditModal,
        handleDeleteAllClick
    }

    return (
        <TaskManagementTask.Provider value={taskInfo}>
            {children}
        </TaskManagementTask.Provider>
    );
};

export default TaskContext;