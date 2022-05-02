import React from "react";

// import components
import NewTask from "./NewTask";
import Task from "./Task";

//images
import addSign from "../images/plusCircle.gif";

function Tasks({
  category,
  currentDate,
  addNewTaskWindow,
  setAddNewTaskWindow,
  tasks,
  setTasks,
  task,
  setTask,
  activeColors,
  setActiveColors,
  chosenColor,
  setChosenColor,
  taskCategory,
  setTaskCategory,
  taskDate,
  setTaskDate,
  taskColor,
  setTaskColor,
  trash,
  setTrash,
  completed,
  setCompleted,
  notificationActive,
  setNotificationActive,
  navOpen,
}) {
  return (
    <div className={`Tasks ${navOpen ? "nav-open" : ""}`}>
      <div className="newTaskButton">
        <img
          src={addSign}
          alt="add new task"
          onClick={() => {
            setAddNewTaskWindow(!addNewTaskWindow);
          }}
        />
      </div>

      <NewTask
        category={category}
        trigger={addNewTaskWindow}
        addNewTaskWindow={addNewTaskWindow}
        setAddNewTaskWindow={setAddNewTaskWindow}
        tasks={tasks}
        setTasks={setTasks}
        currentDate={currentDate}
        task={task}
        setTask={setTask}
        taskCategory={taskCategory}
        setTaskCategory={setTaskCategory}
        taskColor={taskColor}
        setTaskColor={setTaskColor}
        chosenColor={chosenColor}
        setChosenColor={setChosenColor}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
        activeColors={activeColors}
        setActiveColors={setActiveColors}
        notificationActive={notificationActive}
        setNotificationActive={setNotificationActive}
      ></NewTask>

      <Task
        category={category}
        currentDate={currentDate}
        tasks={tasks}
        setTasks={setTasks}
        trash={trash}
        setTrash={setTrash}
        completed={completed}
        setCompleted={setCompleted}
        notificationActive={notificationActive}
        setNotificationActive={setNotificationActive}
      ></Task>
    </div>
  );
}

export default Tasks;
