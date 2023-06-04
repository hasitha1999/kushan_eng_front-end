import EmailVerification from "../pages/EmailVerification";
import DashBoard from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import Login from  "../pages/Login"
import UserList from "../pages/ViewAllUsers";
import FabricationJobs from "../pages/FabricationJobs";
import CompanyJobs from "../pages/CompanyJobs";
import MachineJobs from "../pages/MachineJobs";
import ArchiveIcon from '@mui/icons-material/Archive';

const routeConfig = [
  {
    id: 1,
    path: "/login",
    element: <Login />,
    hideLayout: true,
    noAuth: true,
  },
  {
    id: 2,
    path: "/signup",
    element: <SignUp />,
    hideLayout: true,
    noAuth: true,
  },
  {
    id: 3,
    path: "/email-verification/:verificationToken",
    element: <EmailVerification />,
    hideLayout: true,
    noAuth: true,
  },
  {
    id: 4,
    path: "/",
    element: <DashBoard />,
    icon: <ArchiveIcon fontSize="large" />,
    label: "DashBoard",
    menu: true,
    // roles: ["USER", "ADMIN"],
    noAuth: true,
  },
  {
    id: 6,
    path: "/fabricationJobs",
    element: <FabricationJobs />,
    icon: <ArchiveIcon fontSize="large" />,
    label: "Fabrication Jobs",
    menu: true,
    subMenu :true,
    // roles: ["USER", "ADMIN"],
    noAuth: true,
  },
  {
    id: 7,
    path: "/companyJobs",
    element: <CompanyJobs />,
    icon: <ArchiveIcon fontSize="large" />,
    label: "Company Jobs",
    menu: true,
    // roles: ["USER", "ADMIN"],
    noAuth: true,
  },
  {
    id: 8,
    path: "/machineJobs",
    element: <MachineJobs />,
    icon: <ArchiveIcon fontSize="large" />,
    label: "Machine Jobs",
    menu: true,
    // roles: ["USER", "ADMIN"],
    noAuth: true,
  },

  {
    id: 9,
    path: "/users",
    element: <UserList />,
    icon: <ArchiveIcon fontSize="large" />,
    menu: true,
    label: "Users",
    // roles: ["ADMIN"],
    noAuth: true,
  },

 
];

export default routeConfig;