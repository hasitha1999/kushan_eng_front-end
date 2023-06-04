import { Box } from "@mui/material";
import SideNav from "../../component-ui/SideNav";
import TopBar from "../../component-ui/TopBar";
import routeConfig from "../../config/route-config";
import { useNavigate } from "react-router";

const Layout = (props) => {
  const menuRoutes = routeConfig.filter((route) => route.menu);
  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ float: "right", width: { xs: "100%", md: "80%" } }}>
      <Box sx={{ mr: 2, width: "15%" }}>
        <SideNav menuRoutes={menuRoutes} handleRoute={handleRoute}/>
      </Box>
      <header>
        <Box sx={{ visibility: { xs: "visible", md: "hidden" } }}>
          <TopBar name="hasitha" />
        </Box>
      </header>
      <Box sx={{ float: "right", width: { xs: "100%", md: "100%" ,mb:10} }}>
        {props.children}
      </Box>
      <footer>
      </footer>
    </Box>
  );
};

export default Layout;
