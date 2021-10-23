import { useField } from "formik";
import React from "react";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-full">
      {label && <label className="block mb-1 font-bold">{label}</label>}
      <input
        {...field}
        {...props}
        className="w-full  h-14 shadow-lg rounded-md px-2 py-1 outline-none  focus:ring-4 focus:ring-purple text-gray-500"
        autoComplete="current-password"
      />
      {meta.touched && meta.error ? (
        <span className="text-pink-500 font-bold block pt-3">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default Input;
