import {  AttachMoney, Email, Inventory, LineStyle, ManageAccounts, MessageOutlined, Person, RateReview, Report, Timeline, TrendingUp} from "@mui/icons-material";
import React from "react";
import { BarChart } from "recharts";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sIcon" /> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sIcon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Person className="sIcon" /> Users
            </li>
            <li className="sidebarListItem">
              <Inventory className="sIcon" /> Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sIcon" /> Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sIcon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Email className="sIcon" /> Mails
            </li>
            <li className="sidebarListItem">
              <RateReview className="sIcon" /> Feedbacks
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sIcon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageAccounts className="sIcon" /> Manages
            </li>
            <li className="sidebarListItem">
              <Timeline className="sIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sIcon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
