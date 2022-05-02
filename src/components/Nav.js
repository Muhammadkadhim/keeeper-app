import React from "react";

import { v4 as uuidv4 } from "uuid";
import {
  IoIosList,
  IoIosArrowForward,
  IoIosTrash,
  IoMdAdd,
  IoIosCheckboxOutline,
} from "react-icons/io";

// images
import userImg from "../images/user.jpg";

// Link-router
import { Link } from "react-router-dom";

function Nav({
  category,
  setCategory,
  setTaskCategory,
  subListOpen,
  setSubListOpen,
  newCategoryActive,
  categoryName,
  setCategoryName,
  navOpen,
  currentDate,
}) {
  const addCategoryHandler = () => {
    if (document.querySelector("#category").value !== "") {
      setCategory([...category, { name: categoryName, id: uuidv4() }]);
      setCategoryName("");
      document.querySelector("#category").value = "";
    } else {
    }
  };
  const categoryRemoveHandler = (id) => {
    const newCategoryList = category.filter((item) => item.id !== id);
    setCategory(newCategoryList);
  };
  return (
    <div className={`Nav ${navOpen ? "nav-open" : ""}`}>
      <div className="user">
        <img src={userImg} alt="user" />
        <h1>User</h1>
      </div>
      <div className="navlist">
        <Link to="/">
          <li>
            <div>
              <IoIosCheckboxOutline /> <span>Tasks</span>
            </div>
          </li>
        </Link>
        <li>
          <a
            onClick={() => {
              setSubListOpen(!subListOpen);
            }}
          >
            <div>
              <IoIosList />
              <span> Category</span>
            </div>
            <IoIosArrowForward />
          </a>
          <ul className={`sublist ${subListOpen ? "active-sublist" : ""}`}>
            {/* rendering first category (All) without trash button */}
            {category.map((item, index) => {
              if (index === 0) {
                return (
                  <div className="newItem" key={item.id}>
                    <li>
                      <span
                        className="categoryName"
                        onClick={() => {
                          setTaskCategory(item.name);
                        }}
                      >
                        {item.name}
                      </span>
                    </li>
                  </div>
                );
              }
            })}
            {/* rendering other categories with trash button */}
            {category.slice(1).map((item) => {
              return (
                <div className="newItem" key={item.id}>
                  <li key={item.id.toString()}>
                    <span
                      className="categoryName"
                      onClick={() => {
                        setTaskCategory(item.name);
                      }}
                    >
                      {item.name}
                    </span>
                    <span>
                      <IoIosTrash
                        className="icon"
                        onClick={() => categoryRemoveHandler(item.id)}
                      />
                    </span>
                  </li>
                </div>
              );
            })}
            <div
              className={`newCategory ${
                newCategoryActive ? "newCategory-active" : ""
              }`}
            >
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Add new category"
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
              />
              <IoMdAdd onClick={addCategoryHandler} className="icon" />
            </div>
          </ul>
        </li>
        <Link to="/completed_tasks">
          <li>
            <div>
              <IoIosCheckboxOutline /> <span>Completed</span>
            </div>
          </li>
        </Link>
        <Link to="/trash">
          <li>
            <div>
              <IoIosTrash /> <span>Trash</span>
            </div>
          </li>
        </Link>
      </div>
      <div>
        <p>{currentDate}</p>
      </div>
    </div>
  );
}

export default Nav;
