import React from "react";
import {Pill,TitleText,DescriptionText} from '../molecule/'
import "../../App.css";
import "../../index.css";
import SongType from "../../types/song.json"

type SongProps = typeof SongType

// type PillProps = {
// 	color: string;
// 	genre: string;
// 	id: number;
// };


const Card: React.FC<SongProps> = (props:SongProps) => {
	const {
		id,
		song_name,
		artist_name,
		sub_title,
		description,
		image_url,
		genres,
		favorite_count,
		is_my_favorite,
		star_rating,
		created_at,
		updated_at
	} = props

	return (
		<>
			<div className="group my-16 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex">
					<div className="md:flex-shrink-0">
						<img
							className="filter grayscale-[80%] group-hover:filter-none transition-all duration-100 h-auto w-full md:object-cover md:w-64 md:h-64"
							src={image_url}
							alt={artist_name}
						/>
					</div>
					<div className="p-4">
						<TitleText title={artist_name}/>
						<p
							className="block mt-0.5 text-lg leading-tight font-medium text-black"
						>
							{song_name}
						</p>
						<div>
							<DescriptionText text={description}/>
							{
								genres.map((genre) => {
									return (<Pill key={genre.genre_id} {...genre} />)							})
							}
						</div>
						<div className="h-5">
							<span
								className="mt-4 w-4 h-4 hover:scale-125 duration-150 block bg-like-button bg-no-repeat bg-contain"
							></span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
