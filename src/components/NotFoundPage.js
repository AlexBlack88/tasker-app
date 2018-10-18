import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h3>404! Sorry, page not found!</h3>
    <Link to="/">Back to Dashboard</Link>
  </div>
);

export default NotFoundPage;
