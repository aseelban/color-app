const styles= {
    root: {
      background: "white",
      borderRadius: "5px",
      padding: ".5rem",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      "&:hover svg":{
        opacity: 1
      }

    },
    colors: {
      background: "#e9e9e9",
      height: "150px",
      width: "100%",
      borderRadius: "5px",
      overflow: "hidden",
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0",
      color: "black",
      paddingTop: "0.5rem",
      fontSize: "1rem",
      position: "relative",
    },
    emoji: {
      marginLeft: "0.5rem",
      fontSize: "1.5rem",
    },
    miniColorBox: {
      height: "25%",
      width: "20%",
      display: "inline-block",
      margin: "0 auto",
      position: "relative",
      marginTop: "-3.5px",
    },
    delete: {

    },
    deleteIcon: {
      color: "#fff",
      backgroundColor: "#eb3d30",
      position:"absolute",
      width: "20px",
      height: "20px",
      right: "0",
      top: "0",
      padding: "5px",
      zIndex: 7,
      borderBottomLeftRadius: 5,
      opacity: 0


      
    }
  };
  export default styles;