import breakpoints from "./breakpoints";
import bg from "./bg.svg";

const styles = {
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
  logo: {
    fontSize: "2rem"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    flexWrap: "wrap",
    [breakpoints.down("xl")]: {
      width: "75%",
    },
    [breakpoints.down("xs")]: {
      width: "70%",
    },
    marginBottom: "2rem"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 'bold',
      fontSize: '1rem',
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
