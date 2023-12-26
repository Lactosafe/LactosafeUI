import React from "react";
import { AppRoutes } from "../../../routes";
import "./headerListItem.scss";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HistoryEduOutlined from "@mui/icons-material/HistoryEduOutlined";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import SyncIcon from "@mui/icons-material/Sync";
import { useTheme, useMediaQuery } from "@mui/material";

type displayType = "row" | "block";

interface Props {
  type?: displayType;
}

interface RouterLinks {
  title: String;
  to: AppRoutes;
  icon?: any;
}
const HeaderListItem: React.FC<Props> = ({ type }) => {
  const links: Array<RouterLinks> = [
    {
      title: "Home",
      to: AppRoutes.Home,
      icon: <HomeIcon sx={{ paddingRight: "4px" }} />,
    },
    {
      title: "Historical Data",
      to: AppRoutes.HistoricalData,
      icon: <HistoryEduOutlined sx={{ paddingRight: "4px" }} />,
    },
    {
      title: "Processing",
      to: AppRoutes.Processing,
      icon: <SyncIcon sx={{ paddingRight: "4px" }} />,
    },
    {
      title: "Transporting",
      to: AppRoutes.Transporting,
      icon: <EmojiTransportationIcon sx={{ paddingRight: "4px" }} />,
    },
    {
      title: "Packaging",
      to: AppRoutes.Packaging,
      icon: <AllInboxIcon sx={{ paddingRight: "4px" }} />,
    },
  ];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  return (
    <div
      id={"navBar"}
      className={
        type === "block"
          ? "lactoSafe_HeaderListItemBlock"
          : "lactoSafe_HeaderListItemRow"
      }
    >
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to} id={location.pathname === link.to ? "active" : ""}>
            {" "}
            {matches ? link.icon : ""}
            {link.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default HeaderListItem;
