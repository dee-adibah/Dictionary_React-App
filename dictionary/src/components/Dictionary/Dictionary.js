import React, { useState, useEffect } from "react";
import useStyles from "../../styles";
import { TextField, Button, Container, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Details from "./Details";
import { Stack } from "@mui/system";

function Dictionary() {
	const [searchWord, setSearchWord] = useState(""); //input field
	const [result, setResult] = useState(""); //definition from the api
	//console.log("result",result)
	const [audio, setAudio] = useState("");
	const [image, setImage] = useState([]);

	const TOKEN = `${process.env.REACT_APP_UNSPLASH_API_KEY}`;

	const apiWord = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
	const apiImage = `https://api.unsplash.com/search/photos?client_id=${TOKEN}&query=${searchWord}`;

	const wordApiCall = async () => {
		const res = await fetch(apiWord);
		const data = await res.json();
		//console.log('data', data);
		setResult(data[0]);
		const url = data[0].phonetics[0].audio;
		setAudio(url);
	};

	const imageApiCall = async () => {
		const res = await fetch(apiImage);
		const data = await res.json();
		//console.log('data', data);
		setImage(data.results[0].urls.small);
	};

	useEffect(() => {
		if (searchWord !== "") {
			wordApiCall();
			imageApiCall();
		}
	}, []);

	//When <Search> button is clicked, api will be called and result will be displayed
	const handleSearch = () => {
		wordApiCall();
		imageApiCall();
		setSearchWord("");
	};

	//When <Clear> button is clicked, input field and result field will be empty
	const handleClear = () => {
		setResult("");
	};

	return (
		<div>
			<Container sx={{ ...useStyles.mixins.alignInTheCenter }}>
				<Stack direction="row" spacing={2} sx={{ mx: 2 }}>
					<TextField
						id="filled-controlled"
						label="Key in a word here"
						autoComplete="off"
						variant="filled"
						value={searchWord}
						onChange={(event) => setSearchWord(event.target.value)}
					/>
					<Button
						variant="contained"
						startIcon={<SearchIcon />}
						onClick={handleSearch}
					>
						Search
					</Button>
					<Button
						variant="contained"
						startIcon={<DeleteIcon />}
						onClick={handleClear}
					>
						Clear
					</Button>
				</Stack>
				<Box>
					{result ? (
						<Details {...{ result, audio, image }} />
					) : (
						<p>No Word Available</p>
					)}
				</Box>
			</Container>
		</div>
	);
}

export default Dictionary;
