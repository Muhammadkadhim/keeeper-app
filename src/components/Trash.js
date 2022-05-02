import React, { useState, useEffect } from "react";

// icons
import { FaTrashAlt, FaCalendarAlt, FaTrash } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

function Trash({
  trash,
  setTrash,
  notificationActive,
  setNotificationActive,
  navOpen,
}) {
  const [detailsPup, setDetailsPup] = useState(false);
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [task, setTask] = useState("");
  const [taskId, setTaskId] = useState("");

  const getTaskDetails = (id) => {
    setTaskId(id);
    trash.map((item, index) => {
      if (item.id === id) {
        setTask(item.task);
        setColor(item.color);
        setDate(item.date);
        setTaskCategory(item.category);
      }
    });
  };

  const taskRemoveHandler = (id) => {
    const newTasksList = trash.filter((item) => item.id !== id);
    setTrash(newTasksList);
  };

  const notificationActiveHandler = () => {
    if (trash.length === 0) {
      setNotificationActive(true);
    } else {
      setNotificationActive(false);
    }
  };

  useEffect(() => {
    notificationActiveHandler();
  });

  return (
    <div className={`Trash ${navOpen ? "nav-open" : ""}`}>
      <div className="nav">
        <p>Trash</p>
        <button
          onClick={() => {
            setTrash([]);
          }}
        >
          Empty
        </button>
      </div>

      <div className="container">
        {trash.map((item) => {
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
                <FaTrashAlt
                  style={{ cursor: "pointer" }}
                  className="icon"
                  onClick={() => {
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
          <FaTrash className="icon" />
          <h1>Your removed tasks appear here</h1>
        </div>
      </div>
    </div>
  );
}

export default Trash;
