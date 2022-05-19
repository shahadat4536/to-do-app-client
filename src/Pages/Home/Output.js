import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Output = () => {
  const [user, loading, error] = useAuthState(auth);
  const [taskName, setTaskName] = useState([]);
  const url = `https://murmuring-ridge-09481.herokuapp.com/task/${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTaskName(data);
      });
  }, [user]);
  const handleDelete = (id) => {
    console.log(id);
  };
  const handleDone = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h2>Output{taskName.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {taskName.map((task, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{task.task}</td>
                <td>{task.description}</td>
                <td>
                  <button
                    onClick={() => handleDone(task._id)}
                    className="btn  btn-primary mr-2"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn  btn-accent"
                  >
                    Delete
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Output;
