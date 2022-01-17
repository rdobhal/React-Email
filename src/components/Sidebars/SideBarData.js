import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import EmailIcon from "@material-ui/icons/Email";
import PieChartIcon from "@material-ui/icons/PieChart";
import WidgetsIcon from "@material-ui/icons/Widgets";
import PageviewIcon from "@material-ui/icons/Pageview";
import AirplayIcon from "@material-ui/icons/Airplay";

export const SideBarData = [
  {
    title: "Dashboards",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Layouts",
    icon: <LayersIcon />,
    link: "/layouts",
  },
  {
    title: "Graphs",
    icon: <EqualizerIcon />,
    link: "/graphs",
  },
  {
    title: "Mailbox",
    icon: <EmailIcon />,
    link: "/mailbox",
  },
  {
    title: "Metrics",
    icon: <PieChartIcon />,
    link: "/metrics",
  },
  {
    title: "Widgets",
    icon: <WidgetsIcon />,
    link: "/widgets",
  },
  {
    title: "Forms",
    icon: <PageviewIcon />,
    link: "/forms",
  },
];
