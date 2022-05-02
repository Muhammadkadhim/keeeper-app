import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosClose } from "react-icons/io";

function NewTask({
  trigger,
  category,
  addNewTaskWindow,
  setAddNewTaskWindow,
  tasks,
  setTasks,
  currentDate,
  task,
  setTask,
  taskCategory,
  setTaskCategory,
  taskColor,
  setTaskColor,
  taskDate,
  setTaskDate,
  activeColors,
  setActiveColors,
  chosenColor,
  setChosenColor,
}) {
  return trigger ? (
    <div className="addNewTask">
      <div className="closeBtn">
        <IoIosClose
          className="closeIcon"
          onClick={() => {
            setAddNewTaskWindow(!addNewTaskWindow);
            setTask("");
            setTaskColor(chosenColor);
            setTaskDate(currentDate);
            setChosenColor("white");
            setTaskCategory("All");
          }}
        />
      </div>
      <nav>
        <div className="categorySelector">
          <select
            name="category"
            id="category"
            onChange={(e) => setTaskCategory(e.target.value)}
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
        <div className="dateSelector">
          <span>Date:</span>
          <input
            type="date"
            className="datepicker"
            onChange={(e) => {
              setTaskDate(e.target.value.toString());
            }}
          />
        </div>
        <div
          className="colorSelector"
          onClick={() => {
            setActiveColors(!activeColors);
          }}
        >
          <div className={`colors ${activeColors ? "active-colors" : ""}`}>
            <span
              className={`white ${chosenColor == "white" ? "active" : ""}`}
              onClick={() => {
                setChosenColor("white");
                setTaskColor("white");
              }}
            ></span>
            <span
              className={`orange ${chosenColor == "orange" ? "active" : ""}`}
              onClick={() => {
                setChosenColor("orange");
                setTaskColor("orange");
              }}
            ></span>
            <span
              className={`yellow ${chosenColor == "yellow" ? "active" : ""}`}
              onClick={() => {
                setChosenColor("yellow");
                setTaskColor("yellow");
              }}
            ></span>
            <span
              className={`lightgreen ${
                chosenColor == "lightgreen" ? "active" : ""
              }`}
              onClick={() => {
                setChosenColor("lightgreen");
                setTaskColor("lightgreen");
              }}
            ></span>
            <span
              className={`skyblue ${chosenColor == "skyblue" ? "active" : ""}`}
              onClick={() => {
                setChosenColor("skyblue");
                setTaskColor("skyblue");
              }}
            ></span>
          </div>
          {/* <IoMdColorPalette /> */}
          <span>Color</span>
          <div
            className="selectedColor"
            style={{ backgroundColor: chosenColor }}
          ></div>
        </div>
      </nav>

      <div className="task">
        <textarea
          name="task"
          id="task"
          placeholder="Add new Task"
          style={{ backgroundColor: chosenColor }}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="addBtn">
        <button
          onClick={() => {
            setTasks([
              ...tasks,
              {
                id: uuidv4(),
                task: task,
                category: taskCategory,
                date: taskDate,
                color: taskColor,
              },
            ]);

            setAddNewTaskWindow(!addNewTaskWindow);

            setTask("");
            setTaskColor(chosenColor);
            setTaskDate(currentDate);
            setChosenColor("white");
            setTaskCategory("All");
          }}
        >
          Add
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewTask;
