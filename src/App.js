import React, { useState, useEffect } from "react";

// import components
import Nav from "./components/Nav";
import Tasks from "./components/Tasks";
import Completed from "./components/Completed";
import Trash from "./components/Trash";

import { v4 as uuidv4 } from "uuid";

// icons
import { AiOutlineMenu } from "react-icons/ai";

// style
import "./styles/app.scss";

// router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const todayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    return today;
  };

  // states
  const [category, setCategory] = useState([{ name: "All", id: uuidv4 }]);
  const [currentDate] = useState(todayDate);
  const [addNewTaskWindow, setAddNewTaskWindow] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [subListOpen, setSubListOpen] = useState(false);
  const [newCategoryActive, setNewCategoryActive] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [activeColors, setActiveColors] = useState(false);
  const [chosenColor, setChosenColor] = useState("white");
  const [task, setTask] = useState("");
  const [taskCategory, setTaskCategory] = useState("All");
  const [taskDate, setTaskDate] = useState(currentDate);
  const [taskColor, setTaskColor] = useState(chosenColor);
  const [notificationActive, setNotificationActive] = useState(true);
  const [trash, setTrash] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className={`topBar ${navOpen ? "nav-open" : ""}`}>
          <Link to="/">
            <h1>Keeeper</h1>
          </Link>
          <div
            className="icon"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <AiOutlineMenu />
          </div>
        </div>
        <Nav
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          subListOpen={subListOpen}
          setSubListOpen={setSubListOpen}
          newCategoryActive={newCategoryActive}
          setNewCategoryActive={setNewCategoryActive}
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          category={category}
          setCategory={setCategory}
          setTaskCategory={setTaskCategory}
          currentDate={currentDate}
        ></Nav>

        {/* rotues */}

        <Switch>
          <Route path="/" exact>
            <Tasks
              category={category}
              setCategory={setCategory}
              currentDate={currentDate}
              addNewTaskWindow={addNewTaskWindow}
              setAddNewTaskWindow={setAddNewTaskWindow}
              tasks={tasks}
              setTasks={setTasks}
              activeColors={activeColors}
              setActiveColors={setActiveColors}
              chosenColor={chosenColor}
              setChosenColor={setChosenColor}
              task={task}
              setTask={setTask}
              taskCategory={taskCategory}
              setTaskCategory={setTaskCategory}
              taskColor={taskColor}
              setTaskColor={setTaskColor}
              taskDate={taskDate}
              setTaskDate={setTaskDate}
              trash={trash}
              setTrash={setTrash}
              completed={completed}
              setCompleted={setCompleted}
              notificationActive={notificationActive}
              setNotificationActive={setNotificationActive}
              navOpen={navOpen}
            />
          </Route>
          <Route path="/completed_tasks" exact>
            <Completed
              navOpen={navOpen}
              completed={completed}
              setCompleted={setCompleted}
              notificationActive={notificationActive}
              setNotificationActive={setNotificationActive}
              trash={trash}
              setTrash={setTrash}
              tasks={tasks}
              setTasks={setTasks}
            />
          </Route>
          <Route path="/trash" exact>
            <Trash
              navOpen={navOpen}
              taks={tasks}
              trash={trash}
              setTrash={setTrash}
              notificationActive={notificationActive}
              setNotificationActive={setNotificationActive}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
