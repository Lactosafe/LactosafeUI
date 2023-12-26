import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes/routes";
import SearchIcon from "@mui/icons-material/Search";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import "./headerIcon.scss";

interface RouterLinks {
  name: string;
  to: AppRoutes;
  icon: any;
}

const HeaderIcon: React.FC = () => {
  const iconLinks: Array<RouterLinks> = [
    { name: "SearchIcon", icon: <SearchIcon />, to: AppRoutes.ContactUs },
    {
      name: "ContactPageIcon",
      icon: <ContactPageIcon />,
      to: AppRoutes.ContactUs,
    },
    {
      name: "LoginIcon",
      to: AppRoutes.LogIn,
      icon: <LoginIcon />,
    },
  ];
  return (
    <div className="icon-list">
      {iconLinks.map((icons, index) => (
        <li  key={index}>
          <Link to={icons.to}>{icons.icon}</Link>
        </li>
      ))}
    </div>
  );
};

export default HeaderIcon;
