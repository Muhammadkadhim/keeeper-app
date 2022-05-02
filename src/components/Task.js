import React, { useState, useEffect } from "react";
import {
  FaRegCheckSquare,
  FaTrashAlt,
  FaTasks,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
function Task({
  tasks,
  setTasks,
  trash,
  setTrash,
  completed,
  setCompleted,
  notificationActive,
  setNotificationActive,
  category,
}) {
  const [detailsPup, setDetailsPup] = useState(false);
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [task, setTask] = useState("");
  const [taskId, setTaskId] = useState("");
  const [chosenCategory, setChosenCategory] = useState("All");

  const getTaskDetails = (id) => {
    setTaskId(id);
    tasks.map((item, index) => {
      if (item.id === id) {
        setTask(item.task);
        setColor(item.color);
        setDate(item.date);
        setTaskCategory(item.category);
      }
    });
  };
  const taskRemoveHandler = (id) => {
    const newTasksList = tasks.filter((item) => item.id !== id);
    setTasks(newTasksList);
  };

  const setTrashHandler = (id) => {
    tasks.map((item) => {
      if (item.id === id) {
        setTrash([...trash, item]);
      }
    });
  };

  const setCompletedHandler = (id) => {
    tasks.map((item) => {
      if (item.id === id) {
        setCompleted([...completed, item]);
      }
    });
  };

  const notificationActiveHandler = () => {
    if (tasks.length === 0) {
      setNotificationActive(true);
    } else {
      setNotificationActive(false);
    }
  };

  useEffect(() => {
    notificationActiveHandler();
  });

  return (
    <div className="Task">
      <div className="nav">
        <p>Tasks</p>
        <div className="categorySelector">
          <select
            name="category"
            id="category"
            onChange={(e) => setChosenCategory(e.target.value)}
          >
            {category.map((item) => {
              return (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="container">
        {tasks.map((item) => {
          if (item.category === chosenCategory) {
            return (
              <div className="task-data" key={item.id}>
                <div
                  className="task"
                  style={{ backgroundColor: item.color }}
                  onClick={() => {
                    setDetailsPup(!detailsPup);
                    getTaskDetails(item.id);
                  }}
                >
                  <p> {item.task}</p>
                </div>
                <div className="task-btn">
                  <FaRegCheckSquare
                    style={{ cursor: "pointer" }}
                    className="icon"
                    onClick={() => {
                      setCompletedHandler(item.id);
                      taskRemoveHandler(item.id);
                    }}
                  />
                  <FaTrashAlt
                    style={{ cursor: "pointer" }}
                    className="icon"
                    onClick={() => {
                      setTrashHandler(item.id);
                      taskRemoveHandler(item.id);
                    }}
                  />
                </div>
                <div
                  className={`details-container ${
                    detailsPup ? "details-active" : ""
                  }`}
                >
                  <div className="task-details">
                    <IoIosClose
                      className="closeBtn"
                      onClick={() => setDetailsPup(!detailsPup)}
                    />
                    <p className="category">Category: {taskCategory}</p>
                    <div className="task" style={{ backgroundColor: color }}>
                      <p>{task}</p>
                    </div>
                    <div className="details">
                      <div className="date">
                        {" "}
                        <span>
                          <FaCalendarAlt />{" "}
                        </span>{" "}
                        {date}
                      </div>
                      <div className="btns">
                        {" "}
                        <span
                          onClick={() => {
                            setCompletedHandler(taskId);
                            taskRemoveHandler(taskId);
                            setDetailsPup(!detailsPup);
                          }}
                        >
                          <FaRegCheckSquare />{" "}
                        </span>{" "}
                        <span
                          onClick={() => {
                            setTrashHandler(taskId);
                            taskRemoveHandler(taskId);
                            setDetailsPup(!detailsPup);
                          }}
                        >
                          <FaTrashAlt />
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div
          className={`notification ${
            notificationActive ? "notification-active" : ""
          }`}
        >
          <FaTasks className="icon" />
          <h1>Your new tasks appear here</h1>
        </div>
      </div>
    </div>
  );
}

export default Task;
