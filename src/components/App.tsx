import React, { useEffect, useState } from "react";
import "../App.css";
import "../index.css";
import axios from "axios";

import { Card } from "./organisms/";
import { Pill, FavoriteButton } from "./molecule/";

import DataFetchingOne from "./DataFetchingOne";
import DataFetchingTwo from "./DataFetchingTwo";

const App: React.FC = () => {
	// const [songs, setSongsState] = useState([]);
	// // console.log("start",songs)

	// const getSongsState = async () => {
	// 	const res = await fetch("http://localhost:3001/songs");
	// 	const json = await res.json();
	// 	console.log(json);
	// 	setSongsState(json);
	// };

	// useEffect(() => {
	// 	getSongsState();
	// }, []);

	return (
		<>
			<div className="flex justify-items-center flex-wrap p-4 bg-green-200">
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 round.ed-lg text-9xl">
					1
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					2
				</div>
			</div>
			<Card></Card>
			<FavoriteButton></FavoriteButton>
			<Pill color={"pink"} id={1} genre={"female band"}></Pill>
			{/* <DataFetchingOne></DataFetchingOne> */}
			<DataFetchingTwo></DataFetchingTwo>
		</>
	);
};

export default App;
