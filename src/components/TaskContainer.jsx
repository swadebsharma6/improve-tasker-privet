import { useContext, useState } from "react";
import { TaskManagementTask } from "../Context/TaskContext";
import TaskAction from "./TaskAction/TaskAction";
import TaskEditModal from "./TaskAction/TaskEditModal";
import TaskModal from "./TaskAction/TaskModal";

const TaskContainer = () => {


  const {tasks, setTasks, showAddModal, setShowSetModal, showEditModal, setShowEditModal} = useContext(TaskManagementTask);
  const [editTask, setEditTask] = useState(null);


  const handleAddTask = () => {
    setShowSetModal(!showAddModal);
  };
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  const handleDeleteTask =(taskId)=>{
    const remainTasks = tasks.filter(task => task.id !== taskId);
    setTasks(remainTasks)
  }
  

  const handleEditTask =(task)=>{
    setShowEditModal(!showEditModal);
    setEditTask(task);
}




 

  return (
    <section className="mb-20">
      <div>
      {
        showAddModal && <TaskModal
        showAddModal={showAddModal}
        // taskToUpdate={taskToUpdate}
        setShowSetModal={setShowSetModal}
        ></TaskModal>
      }
      {
        showEditModal && <TaskEditModal 
        handleEditTask={handleEditTask}
        editTask={editTask}
        setEditTask={setEditTask}
        ></TaskEditModal>
      }
        </div>
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <TaskAction handleAddTask={handleAddTask}></TaskAction>
          </div>
          <div className="overflow-auto">
           { tasks.length === 0 ? <h2 className="text-3xl font-bold">No Task, Please Add a Task</h2> : <table className="table-fixed overflow-auto xl:w-full">
              <thead>
                <tr>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                    {" "}
                    Title{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                    {" "}
                    Description{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                    {" "}
                    Tags{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Priority{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Options{" "}
                  </th>
                </tr>
              </thead>     
              <tbody>
               {
              
                tasks.map(task => (
                  <tr key={task.id} className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-star"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="yellow"
                    fill="yellow"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </td>
                <td>{task.title}</td>
                <td>
                  <div>
                   {task.description}
                  </div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag, idx ) =>(
                      <li key={idx} className="rounded-[45px]  px-2.5 bg-opacity-15" style={{ backgroundColor: getRandomColor() }}>
                      <span className=" inline-block h-5 whitespace-nowrap  text-sm capitalize text-[#F4F5F6] " >
                        {tag}
                      </span>
                    </li>
                    ) )}
                  </ul>
                </td>
                <td className="text-center capitalize">{task.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button
                    onClick={()=>handleDeleteTask(task.id)}
                    className="text-red-500">Delete</button>
                    <button
                    onClick={()=>handleEditTask(task)}
                    className="text-blue-500">Edit</button>
                  </div>
                </td>
              </tr>
                ))
              }
              
              </tbody>
            </table>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskContainer;



