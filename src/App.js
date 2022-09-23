import React, { useState } from "react";
import "./App.css";

const List = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Attend meeting",
      status: 0
    },
    {
      title: "Do laundry",
      status: 1
    },
    {
      title: "Complete Assignments",
      status: 1
    },
    {
      title: "Bake cookies",
      status: 0
    }
  ]);
  const [task, setTask] = useState("");
  const [index1, setIndex1] = useState(0);

  const typeTask = (element) => {
    setTask(element.target.value);
  };

  const changeStatus = (index) => {
    let newTasks = [...tasks];
    newTasks[index].status = !newTasks[index].status;
    setTasks(newTasks);
  };

  const addEditTask = (index, remove) => {
    if (task && !index && typeof index === "undefined") {
      setTasks([...tasks, { title: task, status: 0 }]);
      setTask("");
    } else {
      let allTasks = [...tasks];
      if (!remove) {
        setTask(allTasks[index].title);
        allTasks[index].title = task;
      } else {
        allTasks.splice(index, 1);
      }
      console.log("allTasks", allTasks);
      setTasks(allTasks);
    }
  };

  return (
    <div>
      <h3>MY TO DO LIST:</h3>
      <input
        name="input_task"
        placeholder="Add your task here"
        onChange={(element) => {
          typeTask(element);
        }}
        value={task}
      />

      <button onClick={() => addEditTask(index1)}>Submit</button>

      <ul>
        {tasks.map((item, index) => {
          return (
            <li
              key={index}
              style={{ textDecoration: item.status ? "line-through" : "" }}
            >
              {index + 1} - {item.title}{" "}
              <button
                onClick={() => {
                  changeStatus(index);
                }}
              >
                {" "}
                Completed
              </button>
              <button
                onClick={() => {
                  setIndex1(index);
                  addEditTask(index);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setIndex1(index);
                  addEditTask(index, 1);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default List;
