// src/App.js
import React from "react";
import FloatingLabelInput from "./Fields/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <FloatingLabelInput
          label="Username"
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && formik.errors.username}
          errorMessage={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
