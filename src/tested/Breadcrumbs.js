import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <div className="breadcrumbs">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <div className="bc" key={match.url}>
        <div>{breadcrumb}</div>
        {index < breadcrumbs.length - 1 && ">"}
      </div>
    ))}
  </div>
);

export default withBreadcrumbs()(PureBreadcrumbs);
