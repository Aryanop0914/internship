import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import Validations from "../Backend/Validations";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: Validations.usernameCheck,
    onSubmit: async (values) => {
      console.log(values);
      return toast.loading("Checking your credentials...");
    },
  });
  return (
    <div className="Login bgcolor">
      <Toaster></Toaster>
      <div className="twodiv">
        <div className="firstdiv"></div>
        <div className="seconddiv">
          <div className="bg-image">
            <div className="new1"></div>
            <div className="content">
              <div className="new1">{/*  */}</div>
              <header>LOGIN</header>
              <form onSubmit={formik.handleSubmit}>
                <div className="field">
                  <span className="fa fa-user"></span>
                  <input
                    {...formik.getFieldProps("username")}
                    type="text"
                    placeholder="E-mail or Username"
                  />
                </div>{" "}
                <br />
                <div className="field space">
                  <span className="fa fa-lock"></span>
                  <input
                    {...formik.getFieldProps("password")}
                    type="password"
                    className="pass-key"
                    placeholder="Password"
                  />
                  <span className="show">Show</span>
                </div>
                <div className="pass">
                  <a href="/">Forgot password?</a>
                </div>
                <div className="field">
                  <input type="submit" value="LOGIN" />
                </div>
              </form>
              <div className="line"></div>
              <p>
                Don't have an account?
                <Link className="changes" to="/signup">
                  {" "}
                  SignUp
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
