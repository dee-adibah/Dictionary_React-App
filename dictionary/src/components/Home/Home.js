import { Container, Typography, Button } from "@mui/material";
import React from "react";
import useStyles from "../../styles";

function Home() {
	return (
		<div>
			<Container maxWidth="sm" sx={{ ...useStyles.mixins.alignInTheCenter }}>
				<Typography variant="h4" align="center">
					Welcome to the Dictionary App!
				</Typography>
				<Typography variant="h6" align="center">
					You may click below button to proceed
				</Typography>
				<Button
					variant="contained"
					sx={{ my: 2 }}
					href="/dictionary"
					size="large"
				>
					Dictionary
				</Button>
			</Container>
		</div>
	);
}

export default Home;
