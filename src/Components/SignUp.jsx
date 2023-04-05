import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must Be 15 characters or less")
        .required("You must fill first name"),
      lastName: Yup.string()
        .max(20, "Must Be 20 characters or less")
        .required("You must fill last name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          name="firstName"
          id="firstName"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="First Name"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
      </div>

      <div className="input-container">
        <input
          name="lastName"
          id="lastName"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Last Name"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
      </div>

      <div className="input-container">
        <input
          name="email"
          id="email"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
