import breakpoints from "./breakpoints";

const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "11vh",
    [breakpoints.down("xs")]: {
      height: '9vh',
      margin: '-8px 0 4rem 0',
      padding: 0,
      textAlign: 'center',
    },
    "& span": {
      marginLeft: 5,
    },

    [breakpoints.down("vs")]: {
      height: "12vh",
    },
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#555453",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    "& img": {
      width: 80,
      [breakpoints.down("vs")]: {
        marginTop: '13px'
      },
      [breakpoints.down("xs")]: {
        marginTop: '9px'
      },
    },

  },
  level: {
    [breakpoints.down("xs")]: {
      marginTop: "0.5rem !important",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px",
    },
    [breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: 5,
  },
};
export default styles;
