import { styles } from "./Styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Stack from "@mui/material/Stack"
import Tooltip from "@mui/material/Tooltip"
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "./Navbar";
// import logo from "/images/logo.svg";


const Header = () => {
    const router = useRouter();
    const { currentPath } = router
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [loggedin, setLoggedin] = useState(false);
    const [iscompleteStudent, setIscompleteStudent] = useState("false");
    const [iscompleteTeacher, setIscompleteTeacher] = useState("false");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [name, setName] = useState("");
    const [primaryRole, setPrimaryRole] = useState("");
    const [secondaryRole, setSecondaryRole] = useState("");
    const [currentRole, setCurrentRole] = useState("");
    const [refresh, setRefreshT] = useState("");
    const [profileImg, setProfileImg] = useState("");


    const [checked, setChecked] = useState(false);
    const [socialprovider, setSocialprovider] = useState();



    const toggleDrawer = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        //window.location.href = "/dashboard";
        setAnchorEl(null);
    };

    // useEffect(() => {
    //     const loginStatus = localStorage.getItem("loginstatus");
    //     const userName = localStorage.getItem("userName");
    //     const userRole = localStorage.getItem("primaryRole");
    //     const additionaluserRole = localStorage.getItem("secondary-role");
    //     const currentRole = localStorage.getItem("current-role");
    //     const refreshToken = localStorage.getItem("userRefreshToken");
    //     const profileImage = localStorage.getItem("Profile_Img");
    //     const profilecompletestudent = localStorage.getItem("iscompleteStudent");
    //     const profilecompleteteacher = localStorage.getItem("iscompleteTeacher");
    //     setSocialprovider(
    //         localStorage.getItem("setProvider") !== null &&
    //             localStorage.getItem("setProvider") !== "undefined"
    //             ? localStorage.getItem("setProvider")
    //             : null
    //     );

    //     if (loginStatus == "true") {
    //         // If it's true, update the login state
    //         setLoggedin(true);
    //         setName(userName ? userName : "");
    //         setPrimaryRole(userRole ? userRole : "");
    //         setSecondaryRole(additionaluserRole ? additionaluserRole : "");
    //         setCurrentRole(currentRole ? currentRole : "");
    //         setRefreshT(refreshToken ? refreshToken : "");
    //         setProfileImg(profileImage ? profileImage : "");
    //         setIscompleteStudent(
    //             profilecompletestudent ? profilecompletestudent : "false"
    //         );
    //         setIscompleteTeacher(
    //             profilecompleteteacher ? profilecompleteteacher : "false"
    //         );
    //     }
    //     // console.log(profileImage,"profile image")
    // });




    return (
        <>
            <Box sx={headfix}>
                <Grid container sx={[styles.container, { alignItems: "center" }]}>
                    <Grid item xs={5} sm={3} md={2}>
                        <Box sx={logowidth}>
                            <Link href="/">
                                <Image src={"/blog/images/logo.svg"} alt="Logo" width="250px" height="74px" />
                                {/* <Image src={logo} /> */}
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={7} sm={9} md={10}>
                        <Stack sx={navWrap}>
                            <Button sx={menuBtn} onClick={() => toggleDrawer()}>
                                <MenuIcon />
                            </Button>

                            <Box sx={navItems}>


                                <>
                                    <Navbar />

                                    <Tooltip
                                        arrow
                                        placement="top"
                                        title="Add"
                                        disableInteractive
                                        sx={tooltip}
                                    >
                                        <Button>
                                            <HelpOutlineOutlinedIcon />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip
                                        arrow
                                        placement="top"
                                        title="Switch Language"
                                        disableInteractive
                                        sx={tooltip}
                                    >
                                        {/* <Switcher /> */}
                                    </Tooltip>
                                    <Link href="/auth/login" style={{ paddingRight: 0 }}>
                                        <Button sx={loginbtn}>
                                            <AccountCircleOutlinedIcon />

                                        </Button>
                                    </Link>
                                </>

                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Drawer
                sx={{ zIndex: 1510 }}
                anchor="left"
                open={sidebarOpen}
                onClose={toggleDrawer}
            >
                <Box sx={mobileNavmain}>
                    <Stack sx={[smallNavitem]}>
                        <Divider />
                        <nav aria-label="mobile nav">
                            <List>
                                <Navbar />
                            </List>
                        </nav>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
};
const loginbtn = (theme) => ({
    width: "auto",
    height: "auto",
    padding: "0.375rem 0.5rem",
    borderRadius: "3.125rem",
    fontFamily: "'Karla', sans-serif",
    backgroundColor: "#2599FB",
    color: "#fff",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "capitalize",
    flexDirection: "row",
    alignItems: "center",
    minHeight: "3.25rem",
    minWidth: "7rem",
    img: {
        width: "2.125rem",
        height: "2.125rem",
        borderRadius: "50%",
        border: "2px solid #fff",
        marginRight: "0.5rem",
    },
    "&:hover": {
        backgroundColor: "#dfb82e",
        color: "#fff",
    },
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.125rem",
        minHeight: "2.75rem",
    },
});

const nametxt = (theme) => ({
    fontFamily: "'Karla', sans-serif",
    color: "#fff",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "capitalize",
    flex: 1,
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.125rem",
    },
});
const headfix = (theme) => ({
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    position: "fixed",
    zIndex: "9",
    left: "0",
    top: "0",
    width: "100%",
    backgroundColor: "#fff",
    height: "8.375rem",
    [theme.breakpoints.down("xl")]: {
        height: "5.625rem",
    },
});

const logowidth = (theme) => ({
    width: "100%",
    maxWidth: "250px",
    a: {
        display: "inline-block",
    },
    "& img": {
        maxWidth: "100%",
        height: "auto",
    },
    [theme.breakpoints.down("lg")]: {
        maxWidth: "180px",
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: "150px",
    },
});

const navItems = (theme) => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "auto",
    "& a": {
        marginLeft: "1.375rem",
        marginRight: "1.375rem",
        color: "#1E1E1C",
        fontFamily: "Karla",
        fontSize: "1.625rem",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        position: "relative",
        "&.active-link": {
            ":after": {
                content: "''",
                width: "100%",
                height: "0.125rem",
                display: "block",
                background: "#2599fb",
                position: "absolute",
                bottom: "-1rem",
                [theme.breakpoints.down("lg")]: {
                    bottom: "-0.75rem",
                },
            },
        },
        "&:hover": {
            color: "#2599FB",
        },
        [theme.breakpoints.down("xl")]: {
            fontSize: "1.25rem",
            marginLeft: "0.75rem",
            marginRight: "0.75rem",
        },
    },
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
});

const tooltip = () => ({
    color: "#333",
    fontFamily: "'Karla', sans-serif",
    "& svg": {
        fontSize: "1.5rem",
    },
});
const userData = () => ({
    flexDirection: "row",
    padding: "1rem",
    borderBottom: "1px solid #D91962",
    marginBottom: "1rem",
});
const contentProf = () => ({
    marginLeft: "0.5rem",
    flex: 1,
});
const editButton = () => ({
    minWidth: "inherit",
});
const mlAuto = () => ({
    marginLeft: "auto",
    color: "#727272",
});
const avtTitle = (theme) => ({
    color: "#000",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.25rem",
    },
});
const avtSubtitle = (theme) => ({
    color: "#727272",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2.4375rem",
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.125rem",
        lineHeight: "2rem",
    },
});
const avtImage = (theme) => ({
    width: "4.0625rem",
    height: "4.0625rem",
    borderRadius: "4.0625rem",
    border: "3px solid #F9D136",
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPositions: "center top",
        borderRadius: "4.0625rem",
    },
    [theme.breakpoints.down("xl")]: {
        width: "2.75rem",
        height: "2.75rem",
    },
});

const menuItem = (theme) => ({
    color: "#1E1E1C",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2.4375rem",
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.125rem",
        lineHeight: "1.875rem",
    },
});
const menuBtn = (theme) => ({
    marginLeft: "auto",
    background: "#2599FB",
    color: "#fff",
    minWidth: "inherit",
    padding: "0.125rem 0.25rem",
    ":hover": {
        background: "#2599FB",
        color: "#fff",
    },
    [theme.breakpoints.up("md")]: {
        display: "none",
    },
});
const navWrap = (theme) => ({
    flexDirection: "row",
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.125rem",
        lineHeight: "1.875rem",
    },
});
const mobileNavmain = (theme) => ({
    padding: "1rem",
});
const smallNavitem = (theme) => ({
    display: "flex",
    marginTop: "1rem",
});

const headerText = (theme) => ({
    color: "#000",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    "&:hover": { color: "#2599FB" },
    [theme.breakpoints.down("xl")]: {
        fontSize: "1.25rem",
    },
});
const toggleStyle = () => ({
    "& .MuiSwitch-track": {
        backgroundColor: "#B9DFFF",
    },
    "& .MuiSwitch-thumb": {
        color: "#D91962",
    },
    "& .Mui-checked": {
        "& .MuiSwitch-track": {
            backgroundColor: "#B9DFFF",
        },
        "& .MuiSwitch-thumb": {
            color: "#2599FB",
        },
    },
});
export default Header;
