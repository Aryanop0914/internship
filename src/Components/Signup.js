import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
export default function Signup() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    // validate:,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="Login bgcolor">
      <Toaster></Toaster>
      <div className="twodiv">
        <div className="firstdiv1"></div>
        <div className="seconddiv">
          <div className="bg-image">
            <div className="new1"></div>
            <div className="content">
              <div className="new1">{/*  */}</div>
              <header>SIGNUP</header>

              <form onSubmit={formik.handleSubmit}>
                <div className="field">
                  <span className="fa fa-user"></span>
                  <input
                    {...formik.getFieldProps("username")}
                    type="text"
                    required
                    placeholder="Username"
                  />
                </div>{" "}
                <br />
                <div className="field">
                  {/* <span className="fa fa-mailbox"></span>
                   */}
                  <span>
                    {" "}
                    <i className="fa-solid fa-envelopes-bulk"></i>
                  </span>
                  <input
                    {...formik.getFieldProps("email")}
                    type="text"
                    required
                    placeholder="E-mail"
                  />
                </div>{" "}
                <br />
                <div className="field">
                  {/* <span className="fa fa-user"></span> */}
                  <span className="fa fa-lock"></span>
                  <input
                    {...formik.getFieldProps("password")}
                    type="text"
                    required
                    placeholder="Password"
                  />
                </div>{" "}
                <br />
                <div className="field space">
                  <span className="fa fa-lock"></span>
                  <input
                    {...formik.getFieldProps("cpassword")}
                    type="password"
                    className="pass-key"
                    required
                    placeholder="Confirm Password"
                  />
                  <span className="show">Show</span>
                </div>
                <br />
                <div className="field">
                  <input type="submit" value="SIGNUP" />
                </div>
              </form>
              <div className="line"></div>
              <p>
                Already have an account?
                <Link className="changes" to="/">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}
