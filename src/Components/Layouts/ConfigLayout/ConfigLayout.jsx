import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./ConfigLayout.scss";
import { IconBase } from "react-icons";
import { SiSquare } from "react-icons/si";
import { FaClock } from "react-icons/fa6";
import { ImPower } from "react-icons/im";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { useEffect } from "react";

const SidebarItem = ({ icon, label, url, activeConditions }) => {
  const pathname = useLocation().pathname;
  const isActive = activeConditions.some((condition) => {
    if (condition == "/") {
      return pathname == "/";
    }
    console.log(
      "Checking condition:",
      condition,
      "against pathname:",
      pathname,
    );
    return pathname == condition;
  });

  useEffect(() => {
    console.log("Current Lablel:", label);
    console.log("Current pathname:", pathname);
    console.log("Current activeConditions:", activeConditions);
    console.log("is active:", isActive);
    console.log("\n\n");
  }, [pathname]);

  return (
    <NavLink
      to={url}
      className={`DAT_ConfigLayout_SidebarItem ${isActive ? "active" : ""}`}
    >
      <div className={`DAT_ConfigLayout_SidebarItem_Icon `}>{icon}</div>
      <div className={`DAT_ConfigLayout_SidebarItem_Label`}>{label}</div>
    </NavLink>
  );
};

const ConfigLayout = ({ children }) => {
  return (
    <div className="DAT_ConfigLayout">
      <div className="DAT_ConfigLayout_Sidebar">
        <div className="DAT_ConfigLayout_Sidebar_Head">
          <div className="DAT_ConfigLayout_Sidebar_Head_Logo">
            <div>E</div>
          </div>
          <div className="DAT_ConfigLayout_Sidebar_Head_Name">
            Embody Gateway
          </div>
        </div>
        <div className="DAT_ConfigLayout_Sidebar_Body">
          <SidebarItem
            icon={<SiSquare />}
            label="Dashboard"
            url={"/dashboard"}
            activeConditions={["/", "/dashboard"]}
          />
          <SidebarItem
            icon={<FaCog />}
            label="Thiết bị"
            url={"/devices"}
            activeConditions={["/devices"]}
          />
          <SidebarItem
            icon={<MdConnectWithoutContact />}
            label="MQTT"
            url={"/mqtt"}
            activeConditions={["/mqtt"]}
          />
          <SidebarItem
            icon={<HiOutlineNewspaper />}
            label="Profile"
            url={"/profile"}
            activeConditions={["/profile"]}
          />
          <SidebarItem
            icon={<ImPower color="var(--red-500)" />}
            label="Dữ liệu realtime"
            url={"/data-realtime"}
            activeConditions={["/data-realtime"]}
          />
          <SidebarItem
            icon={<FaClock />}
            label="Lịch sử"
            url={"/history"}
            activeConditions={["/history"]}
          />
        </div>
      </div>
      <div className="DAT_ConfigLayout_Body">
        {/* <div className="DAT_ConfigLayout_Body_Header">

        </div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default ConfigLayout;
