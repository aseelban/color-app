import { DRAWER_WIDTH } from "../helper/constants";
import breakpoints from "./breakpoints";

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    [breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    width: "100%",
  },
  title: {
    [breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [breakpoints.down("xs")]: {
      height: "calc(100vh - 25px)",
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  buttons: {
    width: "100%",
    [breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  button: {
    width: "50%",
    [breakpoints.down("xs")]: {
      width: "45%",
      margin: "0 3px",
      fontSize: "0.8rem"
    },
  },
});

export default styles;
