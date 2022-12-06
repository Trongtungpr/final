import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ROUTERS } from "../../../../../const";
import { registerAction } from "../../../../../stores/slices/register.slice.js";
import { v4 as uuidv4 } from "uuid";
import "./RegisterPage.scss";

function RegisterPage(props) {
  const userInfo = useSelector((state) => state.register.userInfoState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: uuidv4(),
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      cart:"",
    },
  });

  const onSubmit = (data) => {
    const {id, name, email, password, confirmPassword, cart } = data;

    // Check if form have any empty input
    const isValidatedForm = id || name || email || password || confirmPassword || cart;

    if (isValidatedForm && password === confirmPassword) {
      dispatch(registerAction(data));

      if (!userInfo?.error) {
        console.error();
      } else {
        navigate(-1);
      }
    }
  };
  const onHome = (e) => {
    navigate(ROUTERS.home);
  };

  return (
    <div>
      <div className="login-page">
        <div className="header-login-page">
          <div className="logo-header-login-page">
            <a href="/#" onClick={onHome}>
              <img
                className="logo-login"
                src={require("../../../../../assets/images/Plantiful Garden Logo.gif")}
                alt=""
              />
            </a>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">WELCOME TO REGISTER 3THL</div>
          <div className="form-body">
            <div className="username" style={{ margin: "20px auto" }}>
              <label className="form__label" htmlFor="firstName">
                User Name:
              </label>
              <input
                {...register("name", { required: true })}
                className="form__input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="email" style={{ margin: "20px auto" }}>
              <label className="form__label" htmlFor="email">
                Email:
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="form__input"
                placeholder="Email"
              />
            </div>
            <div className="password" style={{ margin: "20px auto" }}>
              <label className="form__label" htmlFor="password">
                Password:
              </label>
              <input
                {...register("password", { required: true, minLength: 8 })}
                className="form__input"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="confirm-password" style={{ margin: "20px auto" }}>
              <label className="form__label" htmlFor="confirmPassword">
                Confirm Password:{" "}
              </label>
              <input
                {...register("confirmPassword", {
                  required: true,
                  minLength: 8,
                })}
                className="form__input"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <p className="notification">{userInfo?.error}</p>
          </div>
          <div className="bt-register">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;
