import React from "react";
import { Link, useLocation } from "react-router-dom";

const getBreadcrumbs = (pathname) => {
  const paths = pathname.split("/").filter(Boolean);
  const crumbs = paths.map((path, idx) => {
    const url = "/" + paths.slice(0, idx + 1).join("/");
    return { label: decodeURIComponent(path.replace(/-/g, " ")), url };
  });
  return [{ label: "Home", url: "/" }, ...crumbs];
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <nav className="lcars-breadcrumbs">
      {breadcrumbs.map((crumb, idx) => (
        <span key={crumb.url} className="lcars-breadcrumb-pill">
          <Link to={crumb.url} className="lcars-breadcrumb-link">
            {crumb.label}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
