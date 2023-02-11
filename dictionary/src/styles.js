import { createTheme } from "@mui/material";

const useStyles = createTheme({
	palette: {
		background: {
			default: "#FDFAF6",
		},
	},
	typography: {
		fontFamily: "Share Tech Mono, monospace",
		h5: {
			fontWeight: 800,
		},
		subtitle1: {
			fontWeight: 1000,
		},
	},
	mixins: {
		alignInTheCenter: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			// justifyContent: "center",
			marginTop: "20px",
			height: "100vh",
		},
	},
});

export default useStyles;
