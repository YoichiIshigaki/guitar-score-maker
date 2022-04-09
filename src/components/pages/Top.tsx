import React, { useEffect, useState } from "react";
// import "../../stores";
import "../../index.css";
// import axios from "axios";

import { Card } from "../organisms";
import SongType from "../../types/song.json"
import CarouselType from "../../types/carousel.json"
import MainCarousel from "../organisms/MainCarousel";
import {Header,Footer} from "../organisms";

type Song = typeof SongType
type Carousel = typeof CarouselType

const Top: React.FC = () => {
	const [songs, setSongsState] = useState<Song[]>([]);
	const [carousels, setCarouselsState] = useState<Carousel[]>([]);

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

	const getCarouselsState = async () => {
		try{
			const res = await fetch("http://localhost:3003/api/images/carousels");
			const json = await res.json();

			console.log(json);
			setCarouselsState(json);

		}catch(error:any){
			console.log(`error:${error}`);
		}
	};

	useEffect(() => {
		getSongsState();
		getCarouselsState();
	}, []);

	return (
		<>
			<Header/>
			<MainCarousel carousels={carousels}/>
				{
					songs.map((song)=>{
						return <Card {...song}/>
					})
				}
			<Footer/>	
		</>
	);
};

export default Top;
