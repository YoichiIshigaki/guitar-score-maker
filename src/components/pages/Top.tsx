import React, { useEffect, useState } from "react";
// import "../../stores";
import "../../index.css";
// import axios from "axios";

import SongType from "../../types/song.json"
import CarouselType from "../../types/carousel.json"
import { Header,Footer,MainCarousel,Card } from "../organisms";
import SimpleSlider from "../organisms/SimpleSlider";
import { Config } from '../../modules/config/';
import NewCard from "../organisms/NewCard";

type Song = typeof SongType
type Carousel = typeof CarouselType

const Top: React.FC = () => {
	const [newSongs, setNewSongsState] = useState<Song[]>([]);
	const [highRatingSongs, setHighRatingSongsState] = useState<Song[]>([]);
	const [highFavoSongs, setHighFavoSongsState] = useState<Song[]>([]);
	const [metalSongs, setMetalSongsState] = useState<Song[]>([]);
	const [carousels, setCarouselsState] = useState<Carousel[]>([]);

	// type FetchSong = () => Promise<Song[]>;

	const getSongs = (
			stateFuncCallback:(songs:Song[]) => void,
			queryDict? : { [key:string] : string }
		): void => {
			// https://zenn.dev/ogakuzuko/articles/learn-typescript-7
			// レスポンスとして返ってきた`json`が確りと`Song[]`型に沿っているかを確認
				let queryString = ""
				if (queryDict){
					const searchParams = new URLSearchParams();
					Object.keys(queryDict).forEach( key => {
						searchParams.append(key, queryDict[key]);
					})
					queryString = "?" + searchParams.toString();
				}

				const apiUrl = `${Config.apiUrl}/api/songs${queryString}`

        // APIをFetchメソッドで実行
        fetch(apiUrl).then(res => res.json())
					.then((json:Song[]) => {
						console.log(json)
						stateFuncCallback(json)
					}).catch(error => {
						stateFuncCallback([])
					})

			
	};

	const getCarouselsState = async () => {
		try{
			const res = await fetch(`${Config.apiUrl}/api/images/carousels`);
			const json = await res.json();

			console.log(json);
			setCarouselsState(json);

		}catch(error:any){
			console.log(`error:${error}`);
		}
	};

	useEffect(() => {
		getSongs(setNewSongsState,{
      _sort: "created_at",
      _order:"asc"
    })
		getSongs(setHighRatingSongsState,{
      _sort: "star_rating",
      _order:"asc"
    })
		getSongs(setHighFavoSongsState,{
      _sort: "favorite_count",
      _order:"asc"
    })
		getSongs(setMetalSongsState,{
      q: "metal",
    })
		
		getCarouselsState();
	}, []);

	return (
		<>
			<Header/>
			<MainCarousel carousels={carousels}/>
			<SimpleSlider>
				{
					newSongs.map((song)=>{
						return <NewCard key={song.id} {...song}/>
					})
				}
			</SimpleSlider>
			<SimpleSlider>
				{
					highRatingSongs.map((song)=>{
						return <NewCard key={song.id} {...song}/>
					})
				}
			</SimpleSlider>
			<SimpleSlider>
				{
					highFavoSongs.map((song)=>{
						return <NewCard key={song.id} {...song}/>
					})
				}
			</SimpleSlider>
			<SimpleSlider>
				{
					metalSongs.map((song)=>{
						return <NewCard key={song.id} {...song}/>
					})
				}
			</SimpleSlider>
				{/* {
					songs.map((song)=>{
						return <Card key={song.id} {...song}/>
					})
				} */}
			<Footer/>	
		</>
	);
};

export default Top;
