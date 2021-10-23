import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Input from "./Input";
import logo from "../logo.png";
import { useHistory } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { register } from "../features/user/userSlice";
const Register = () => {
    const {goBack} = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
      dispatch(register(values))
      goBack()
    };
    return (
        <div className="h-screen flex justify-center items-center bg-white md:bg-purple">
          <div className="rounded-lg px-10 bg-white w-full lg:w-3/4 flex flex-col justify-center shadow-lg">
         <IoArrowBackCircleOutline onClick={()=> goBack()} className="text-5xl mt-3 cursor-pointer hover:text-pink-500"/>
          <img src={logo} className="mx-auto" alt="logo" width="200px" />
            <h3 className="text-lg text-center pb-3 text-gray-600 font-semibold">
              Register your Account
            </h3>
            <Formik
              initialValues={{
                name:"",
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={Yup.object({
                name: Yup.string()
                .required("Nombre es requerido"),
                email: Yup.string()
                  .email("Email Invalido")
                  .required("Email es obligatorio"),
                password: Yup.string().required("Password es obligatorio"),
              })}
              
            >
              <Form className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 md:justify-items-start md:mb-6">
                <Input name="name" type="text" placeholder="Name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <button className="w-full md:w-1/3 h-14 text-center py-2 rounded-lg text-white bg-blue shadow-md hover:bg-pink-400" type='submit'>
                  Sign up
                </button>
              </Form>
            </Formik>
          </div>
      </div>
    )
}

export default Register
