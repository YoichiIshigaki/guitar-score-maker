import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

const App: React.FC = () => {
	const [artistName, setArtistName] = useState("");

	const getArtistName = useCallback(async () => {
		const res = await fetch("http://localhost:3001/songs?artist_name=Nirvana");
		const json = await res.json();
		console.log(json);
		setArtistName(json[0].artist_name);
	}, []);

	useEffect(() => {
		getArtistName();
	});

	return (
		<React.Fragment>
			<h1>{artistName}</h1>
			<div className="flex justify-items-center flex-wrap p-4 bg-green-200">
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 round.ed-lg text-9xl">
					1
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					2
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					3
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					4
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					5
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					6
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					7
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					8
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					9
				</div>
				<div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
					10
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
