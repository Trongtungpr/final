import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

export function ProtectedRoute(props) {
  const userInfo = useSelector((state) => state.user.userInfoState);

  if (!userInfo.data) return <div>Khong the truy cap</div>;

  return <>{props.children}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
