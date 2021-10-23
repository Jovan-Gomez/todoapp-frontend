import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Input from "./Input";
import logo from "../logo.png";
import logo2 from "../todo-list.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleSubmit = (values) => {
    dispatch(login(values));
    push('tasks')
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white md:bg-purple">
      <div className="rounded-lg px-10 bg-white w-full lg:w-3/4 flex justify-center md:justify-around shadow-lg">
        <div className="">
          <img src={logo} className="m-auto" alt="logo" width="200px" />
          <h3 className="text-lg  text-gray-600 text-center font-semibold mb-6">
            Login to your Account
          </h3>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid Email")
                .required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
          >
            <Form className="grid grid-cols-1 gap-4 md:justify-items-start">
              <Input name="email" type="email" placeholder="Email" required />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full h-14 text-center py-2 rounded-lg text-white bg-blue shadow-md hover:bg-pink-400"
              >
                Sign in
              </button>
            </Form>
          </Formik>
          <p className="text-gray-500 text-center mt-5 mb-2">
            Don't have an account?{" "}
            <span
              onClick={() => push("/register")}
              className="text-blue font-bold hover:text-pink-500 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img src={logo2} alt="todo-list" width="350px" />
        </div>
      </div>
    </div>
  );
};

export default Login;
