import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, Row } from "antd";
import ContentProductDashBoard from "../../../components/dashboad/ContentProductDashBoard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../../../stores/actions/productActions";
import { getAllUserActions } from "../../../stores/actions/userAction";
import ContentUserDashBoard from "../../../components/dashboad/ContentUserDashBoard";
import "./DashBoard.scss";
import { useNavigate } from "react-router";
import { ROUTERS } from "../../../const";
import { logoutAction } from "../../../stores/slices";
const { Header, Sider, Content } = Layout;

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [useStateContent, setStateContent] = useState();
  const userInfo = useSelector((state) => state.user.userInfoState.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSelectorUser = () => {
    setStateContent(0);
    dispatch(getAllUserActions());
  };
  const handleSelectorProduct = () => {
    setStateContent(1);
    dispatch(getAllProductsAction());
  };
  console.log(useStateContent);
  const gotoLoginPage = () => {
    navigate(ROUTERS.login);
  };
  const onLogout = () => {
    dispatch(logoutAction());
  };
  const onHome = () => {
    navigate(ROUTERS.home);
  };
  return (
    <Layout className="background-sider">
      <Sider className="background-sider">
        <div className="logo">
          <img
            onClick={onHome}
            className="logo-img"
            src={require("../../../assets/images/Plantiful Garden Logo.gif")}
          ></img>
        </div>
        <Menu class="content-dashboard background-sider">
          <a class="selector-dashboard" onClick={handleSelectorUser}>
            <UserOutlined className="icon-dashboard" />
            <h1>User</h1>
          </a>
          <a class="selector-dashboard" onClick={handleSelectorProduct}>
            <TableOutlined className="icon-dashboard" />
            <h1>Product</h1>
          </a>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background background-sider"
          style={{
            padding: 0,
          }}
        >
          <Row>
            <Col md={18}>
              {/* {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )} */}
            </Col>
            <Col md={6}>
              <div className="user">
                <Avatar
                  className="ant-avatar"
                  size="default"
                  icon={<UserOutlined />}
                ></Avatar>{" "}
                {userInfo && (
                  <div className="user-logout">{userInfo.email}</div>
                )}
                {userInfo === null ? (
                  <div className="header-login" onClick={gotoLoginPage}>
                    LOGIN
                  </div>
                ) : (
                  <div className="header-logout" onClick={onLogout}>
                    Logout
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {useStateContent === 1 && <ContentProductDashBoard />}
          {useStateContent === 0 && <ContentUserDashBoard />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashBoard;
