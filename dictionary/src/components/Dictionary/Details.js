import React, { Fragment } from "react";
import { Typography, Box, Divider } from "@mui/material";
import { Stack } from "@mui/system";

function Details({ result, audio, image }) {
	const { word, phonetics, meanings } = result;
	const { small } = image;

	return (
		<>
			<Typography
				sx={{
					textTransform: "capitalize",
					mt: 3,
					background:
						"linear-gradient(90.17deg, #191E5D 0.14%, #0F133A 98.58%)",
					boxShadow: "0px 10px 20px rgba(19, 23, 71, 0.25)",
					px: 2,
					py: 3,
					color: "white",
					borderRadius: 2,
				}}
				variant="h5"
				marginBottom={"15px"}
			>
				{word} - {phonetics.map((pronounce) => pronounce.text)}
			</Typography>
			<Stack direction="column" spacing={2} sx={{ mx: 2 }}>
				{audio ? <audio controls src={audio}></audio> : <p>Audio Not Found</p>}
				{image ? (
					<img style={{ width: "250px" }} src={image} />
				) : (
					<p>image not found</p>
				)}
			</Stack>
			{meanings.map((individualMeaning, index) => (
				<Fragment key={index}>
					<Divider sx={{ display: index === 0 ? "none" : "block", my: 3 }} />
					<Box
						sx={{
							boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
							backgroundColor: "#fff",
							p: 1,
							borderRadius: 2,
							mt: 3,
						}}
					>
						<Typography
							sx={{ textTransform: "capitalize" }}
							color="GrayText"
							variant="subtitle1"
						>
							{individualMeaning.partOfSpeech}
						</Typography>
						{individualMeaning.definitions.map((individualDefinition) => (
							<Typography sx={{ my: 1 }} variant="body2" color="GrayText">
								{individualDefinition.definition}
							</Typography>
						))}
					</Box>
				</Fragment>
			))}
		</>
	);
}
export default Details;
