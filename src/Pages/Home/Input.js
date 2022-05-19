import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Input = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleTask = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const description = event.target.description.value;
    const email = user.email;
    const taskData = { task, description };

    fetch("https://murmuring-ridge-09481.herokuapp.com/tasks", {
      method: "POST",
      body: JSON.stringify({ task, description, email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="mt-10 flex justify-center">
      <div class="card w-96 bg-slate-600 text-primary-content">
        <div class="card-body ">
          {/* <h2 class="card-title">Card title!</h2> */}

          <form onSubmit={handleTask} className=" grid grid-cols-1 gap-5 ">
            <input
              type="text"
              placeholder="Task Name"
              name="task"
              class="input w-full max-w-xs text-black"
              required
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              class="input input-bordered w-full max-w-xs text-black"
              required
            />
            <input
              type="submit"
              className="btn btn-outline text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
