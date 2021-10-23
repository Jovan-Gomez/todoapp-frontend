import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useHistory} from "react-router-dom";
import { deleteTask } from "../features/todos/todosSlice";
const CardTask = ({ task }) => {
  const { push } = useHistory();
  const dispatch = useDispatch()
  return (
    <div className="rounded-lg border-2 flex items-start pl-3 flex-col justify-center border-blue w-1/3 h-28 shadow-lg">
      <div>
        <p>{task.title}</p>
        <p>{task.description}</p>
      </div>
      <div className="flex justify-between w-full pr-2">
        <div className="flex"> 
        <BiEdit className="text-2xl text-green-500" onClick={()=> push(`/task/edit/${task._id}`)}/>
          <BiTrash className="text-2xl text-red-500" onClick={()=> dispatch(deleteTask(task._id))} />
        </div>
        <div>
          <p>
            Done? <input type="checkbox" className="transform first:rotate-45" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTask;
