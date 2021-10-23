import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardTask from "./CardTask";
import { todos } from "../features/todos/todosSlice";
import DashBoard from "./DashBoard";
const Tasks = () => {
  const mytodos = useSelector((state) => state.todos.myTodos);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todos(token));
  }, [dispatch, token]);
  const todosFilter = mytodos.filter(el => el.status !== false);

  const list = todosFilter.map((task, i) => (
    <CardTask key={`${i}-${task.title}`} task={task} />
  ));
  return (
    <DashBoard section="My ToDo's">
      <div className="mx-auto  overflow-auto flex flex-wrap gap-3 justify-center rounded-lg shadow-2xl h-full w-11/12 py-2 px-11">
        {list}
      </div>
    </DashBoard>
  );
};

export default Tasks;
