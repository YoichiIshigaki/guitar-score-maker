import React from "react";
import "../../App.css";
import "../../index.css";
import {Pill,TitleText,DescriptionText} from '../molecule/'
import SongType from "../../types/song.json"

type SongProps = typeof SongType


const NewCard: React.FC<SongProps> = (props:SongProps) => {
	const {
		id,
		song_name,
		artist_name,
		sub_title,
		description,
		image_url,
		genres,
		favorite_count,
		star_rating,
		created_at,
		updated_at
		is_my_favorite,
	} = props
	return (
		<>
			<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
				<img className="w-full" src={image_url} alt={artist_name}/>
				<div className="px-6 py-4">
					<TitleText title={artist_name}/>
					<p className="block mt-0.5 text-lg leading-tight font-medium text-black">
						{song_name}
					</p>
					<DescriptionText text={description}/>
				</div>
				<div className="px-6 pt-4 pb-2">
					{
						genres.map((genre) => {
							return (<Pill key={genre.genre_id} {...genre} />)
						})
					}
				</div>
				<span className="mt-4 w-4 h-4 hover:scale-125 duration-150 block bg-like-button bg-no-repeat bg-contain">
				</span>
			</div>
		</>
	);
};

export default NewCard;
