import breakpoints from "./breakpoints";
import bg from "./bg.svg";

const styles = {
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [breakpoints.down("xl")]: {
      width: "75%",
    },
    [breakpoints.down("xs")]: {
      width: "70%",
    },
    marginBottom: "2rem",
  },
  root: {
    background: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#394bad",
    /* background by SVGBackgrounds.com */
    backgroundImage: `url(${bg})`,
    backgroundAttachment: "fixed",
    overflowY: "scroll",
  },
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  generatorLink: {
    height: 46,
    padding: "0 21px",
    fontSize: 15,
    background: "#7355d2",
    lineHeight: "45px",
    borderRadius: 10,
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    [breakpoints.down("xs")]: {
      padding: "0 7px",
      fontSize: 11,
      fontWeight: 600,
      lineHeight: "40px",
      height: "100%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& img": {
      width: 150,
      [breakpoints.down("xs")]: {
        width: '100px'
      },
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2.5rem",
    [breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.3rem",
    },
  },
};

export default styles;
