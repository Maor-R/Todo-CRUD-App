import { GrUpdate } from "react-icons/gr";
import { useState, useEffect } from "react";
import "../index.css";

import { FcApprove, FcDisapprove } from "react-icons/fc";

const Task = ({ id, task, status, updateTaskStatus, removeTask }) => {
  const [getStatus, setGetStatus] = useState(status);
  const [getId, setGetId] = useState(id);

  console.log(task);
  return (
    <>
      {getId && (
        <article className="card">
          <h5>{task}</h5>
          <button
            className="btn btn-transparent mt"
            onClick={() => {
              if (true) {
                setGetStatus(true);
                updateTaskStatus(id);
              }
            }}
          >
            {!getStatus && <FcDisapprove />}
            {getStatus && <FcApprove />}
          </button>
          <button
            className="btn btn-transparent mt"
            onClick={() => {
              setGetId(null);
              removeTask(id);
            }}
          >
            <GrUpdate />
          </button>
        </article>
      )}
    </>
  );
};

export default Task;
