import breakpoints from "./breakpoints";

const styles = {
    PaletteFooter: {
        height: '5vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: 'bold',
        [breakpoints.down("xs")]: {
          display: "none"
        },
      },
      PaletteEmoji: {
        fontSize: '1.5rem',
        margin: '0 1rem',
      }
      
}

export default styles;