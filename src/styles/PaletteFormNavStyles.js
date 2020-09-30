import { DRAWER_WIDTH } from "../helper/constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;
const styles = (theme) => ({
  root: {
    display: "flex",

    "& h6": {
      [sizes.down("xs")]: {
        fontSize: "1rem",
      },
    },
  },
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
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
    [sizes.down("xs")]: {
      marginLeft: 0,
      marginRight: 0,
      padding: 4,
    },
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem",
      fontSize: 10,
    },
  },
});

export default styles;
