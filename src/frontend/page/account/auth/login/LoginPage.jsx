import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { loginAction } from "../../../stores/slices";
import "./LoginPage.scss";
// import { ROUTERS } from "../../../const";
import { loginAction } from "../../../../../stores/slices";
import { ROUTERS } from "../../../../../const";

const schema = yup
  .object({
    password: yup
      .string()
      .min(8, "Password must be at least 8 character")
      .required("Password is required"),
  })
  .required();

export const LoginPage = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfoState);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
  }, [register]);

  if (userInfo.data) {
    return <Navigate to={"/"} />;
  }
  const onLogin = (values) => {
    dispatch(loginAction(values));
  };

  const onRegister = (e) => {
    navigate(ROUTERS.register);
  };
  const onHome = (e) => {
    navigate(ROUTERS.home);
  };

  return (
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
      <div className="login-header">
        <div className="title-login">LOGIN </div>
        <div className="logo">
          <a href="/#" onClick={onHome}>
            <img
              className="logos"
              src={require("../../../../../assets/images/Plantiful Garden Logo.gif")}
              alt=""
            />
          </a>
        </div>
        <div>
          <div>
            <Form
              name="basic"
              wrapperCol={{ span: 24 }}
              onFinish={handleSubmit(onLogin, (err) => console.log(errors))}
              onFinishFailed={() => {}}
              autoComplete="off"
              className="basic"
            >
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, name, ref } }) => (
                  <Form.Item
                    validateStatus={errors.email && "error"}
                    help={errors?.email?.message}
                    name={name}
                    className="users-item"
                  >
                    <Input
                      onChange={onChange}
                      value={value}
                      name={name}
                      placeholder="Email"
                      ref={ref}
                      className="input-item"
                      type="email"
                    />
                  </Form.Item>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, name, ref } }) => (
                  <Form.Item
                    validateStatus={errors.password && "error"}
                    help={errors?.password?.message}
                    name={name}
                    className="password"
                  >
                    <Input.Password
                      onChange={onChange}
                      value={value}
                      name={name}
                      placeholder="Password"
                      ref={ref}
                      className="pass-item"
                      required={{ required: true, minLength: 8 }}
                    />
                  </Form.Item>
                )}
              />
              <div className="button-item">
                <div className="bt1">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      shape="round"
                      className="btton"
                    >
                      Login
                    </Button>
                  </Form.Item>
                </div>
                <div className="bt2">
                  <Form.Item>
                    <Button
                      to="/register"
                      type="primary"
                      htmlType="submit"
                      shape="round"
                      className="btton"
                      onClick={onRegister}
                    >
                      Create Accoount
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
