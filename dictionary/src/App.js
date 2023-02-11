import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, AppBar, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Home from "./components/Home/Home";
import Dictionary from "./components/Dictionary/Dictionary";
import useStyles from "./styles";

function App() {
	return (
		<div>
			<ThemeProvider theme={useStyles}>
				<CssBaseline />
				<main>
					<Router>
						<AppBar position="relative">
							<Toolbar>
								<Link to="/" style={{ color: "inherit", paddingTop: "6px" }}>
									<HomeIcon />
								</Link>
							</Toolbar>
						</AppBar>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route path="/dictionary" element={<Dictionary />} />
						</Routes>
					</Router>
				</main>
			</ThemeProvider>
		</div>
	);
}

export default App;
