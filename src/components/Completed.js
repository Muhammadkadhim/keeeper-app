import React, { useState, useEffect } from "react";

// icons
import { FaCheckSquare, FaTrashAlt, FaCalendarAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

function Completed({
  completed,
  setCompleted,
  notificationActive,
  setNotificationActive,
  trash,
  setTrash,
  tasks,
  setTasks,
  navOpen,
}) {
  const [detailsPup, setDetailsPup] = useState(false);
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskId, setTaskId] = useState("");

  const getTaskDetails = (id) => {
    setTaskId(id);
    completed.map((item, index) => {
      if (item.id === id) {
        setTask(item.task);
        setColor(item.color);
        setDate(item.date);
        setTaskCategory(item.category);
      }
    });
  };
  const taskRemoveHandler = (id) => {
    const newTasksList = completed.filter((item) => item.id !== id);
    setCompleted(newTasksList);
  };

  const setTrashHandler = (id) => {
    completed.map((item) => {
      if (item.id === id) {
        setTrash([...trash, item]);
      }
    });
  };

  const notificationActiveHandler = () => {
    if (completed.length === 0) {
      setNotificationActive(true);
    } else {
      setNotificationActive(false);
    }
  };

  useEffect(() => {
    notificationActiveHandler();
  });

  return (
    <div className={`Completed ${navOpen ? "nav-open" : ""}`}>
      <div className="nav">
        <p>Completed tasks</p>
      </div>

      <div className="container">
        {completed.map((item) => {
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
                {item.task}
              </div>
              <div className="task-btn">
                <FaCheckSquare
                  style={{ cursor: "pointer" }}
                  className="icon"
                  onClick={() => {
                    setTasks([...tasks, item]);
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
        })}

        <div
          className={`notification ${
            notificationActive ? "notification-active" : ""
          }`}
        >
          <FaCheckSquare className="icon" />
          <h1>Your completed tasks appear here</h1>
        </div>
      </div>
    </div>
  );
}

export default Completed;
