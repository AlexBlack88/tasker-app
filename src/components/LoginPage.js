import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const LoginPage = ({ startLogin }) => (
  <div className="box">
    <div className="box__card">
      <h1 className="box__title">Tasker</h1>
      <p>Управляй задачами с нами</p>
      <button className="button" onClick={startLogin}>
        Войти с помощью Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
