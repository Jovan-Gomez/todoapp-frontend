import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { createTask, updateTask } from "../features/todos/todosSlice";
import { useParams } from "react-router";
const TaskForm = ({section, task}) => {
  const dispatch = useDispatch();
  //const { push } = useHistory();

    const {id} = useParams()
  const handleSubmit = (values) => {
    if (section === 'Create new Task') {
        dispatch(createTask(values))
    }
    values.id = id
    dispatch(updateTask(values))
    console.log('Task Actualizada');
  };
  return (
    <div className="w-3/4 m-auto shadow-2xl py-4 px-10 rounded-xl">
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
            title: Yup.string()
              .required("Title is required"),
            description: Yup.string().required("Description is required"),
          })}
      >
        <Form>
          <Input name="title" label="Title" required/>
          <br />
          <Input name="description" label="Description" required/>
          <button
            type="submit"
            className="bg-blue mt-4 w-full md:w-52 h-14 text-center py-2 rounded-lg text-white shadow-md hover:bg-green-400 transition-all ease-in duration-300"
          >
            {
                section === 'Create new Task' ?  'Create' : 'Update'
            }
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
