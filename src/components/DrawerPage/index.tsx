import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,Box
} from "@mui/material";
import { ClipboardList, House } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser } from "../../pages/Dashboard/domain/User.entity";
interface DrawerPageProps {
  user: IUser | null
}
interface MenuItem {
  title: string;
  icon: JSX.Element;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: <House color="#CBD5E1" />,
    path: "/",
  },
  {
    title: "Administration Panel",
    icon: <ClipboardList color="#CBD5E1" />,
    path: "/administration",
  },
];

const DrawerPage = ({ user }:DrawerPageProps) => {
  const location = useLocation()
  const navigate = useNavigate();
  const handleClickListItemButtom = (path: string) => {
    navigate(path);
  };
  return (
    <Box sx={{ bgcolor: "#10172A" }} className="m-1 rounded-lg p-1" >
      <List>
        {menuItems.map((section) => (
          <ListItemButton
            key={section.title}
            className={`
              hover:!bg-[#334154] !mb-1 !transition-colors !ease-linear !p-1 !pl-2 !rounded-md 
              ${location.pathname === section.path && "!bg-[#334154]"}
              ${!user?.role.includes("admin") && section.path === "/administration"  && "!hidden"}`
            }
            onClick={() => handleClickListItemButtom(section.path)}
          >
            <ListItemIcon sx={{ minWidth: "unset", paddingRight: 1 }}>
              {section.icon}
            </ListItemIcon>
            <ListItemText>
              <p className="font-inter text-[#CBD5E1]">{section.title}</p>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default DrawerPage;
