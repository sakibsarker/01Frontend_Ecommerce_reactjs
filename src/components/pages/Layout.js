import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Layout=()=>{
    return <>
    <CssBaseline/>
    <NavBar />
    <Outlet />
    </>;

};
export default Layout;