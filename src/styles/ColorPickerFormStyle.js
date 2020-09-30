import breakpoints from "./breakpoints";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: 'center',
    [breakpoints.down("xs")]: {
      marginBottom: "1rem",
    },
  },
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColor: {
    padding: 0,
    fontSize: "1rem",
    margin: 0,
    width: "60%",
    marginTop: '0.6rem',
    [breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      width: "50%",
      padding:'0.3rem 0'
    },
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
  },
};

export default styles;
