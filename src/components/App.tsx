import React, { useEffect, useState } from "react";
import "../App.css";
import "../index.css";
import axios from "axios";

import { Card } from "./organisms/";
import { Pill, FavoriteButton } from "./molecule/";
import SongType from "../types/song.json"
import Carousel from "./organisms/Carousel";

type Song = typeof SongType

const App: React.FC = () => {
	const [songs, setSongsState] = useState<Song[]>([]);

	const getSongsState = async () => {
		try{
			const res = await fetch("http://localhost:3003/api/songs");
			const json = await res.json();

			console.log(json);
			setSongsState(json);

		}catch(error:any){
			console.log(`error:${error}`);
		}
	};

	useEffect(() => {
		getSongsState();
	}, []);

	return (
		<>
		<Carousel/>
			{
			songs.map((song)=>{
				return <Card {...song}/>
			})}
		</>
	);
};

export default App;
