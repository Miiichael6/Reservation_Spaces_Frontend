import { AdministrationScreen } from "@/pages/Administration";
import { DashBoardScreen } from "@/pages/Dashboard";
import { LoginScreen } from "@/pages/Login";

interface iroute {
    name: string;
    path: string;
    category: string[];
    page: () => JSX.Element;
}

export const routes: iroute[] = [
    {
        name: "login",
        path: "/login",
        category: ["public"],
        page: LoginScreen
    },
    {
        name: "dashboard",
        path: "/login",
        category: ["protected"],
        page: DashBoardScreen
    },
    {
        name: "administration",
        path: "/administration",
        category: ["private"],
        page: AdministrationScreen
    },
    
]